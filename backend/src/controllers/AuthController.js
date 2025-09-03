// prisma client
import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

import bcrypt from 'bcrypt'
import { createUserToken } from '../helpers/create-user-token.js';

export class AuthController {
    static async register(req, res) {
        const { nome, email, senha, confirmaSenha } = req.body || {}

        if(!nome || !email || !senha || !confirmaSenha) return res.status(400).json({ status: 400, message: 'Preencha todos os campos.', error: true })
        
        if(senha.length < 6) return res.status(400).json({ status: 400, message: 'A senha deve conter no mínimo 6 caracteres.', error: true })

        if(senha != confirmaSenha) return res.status(400).json({ status: 400, message: 'As senhas não coincidem.', error: true })

        const userExist = await prisma.usuario.findUnique({ where: { email: email } })
        if(userExist) return res.status(400).json({ status: 400, message: 'O email está indisponível.', error: true })

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(senha, salt)

        const newUser = {
            nome,
            email,
            senha: passwordHash,
            acesso: 'user'
        }

        const safeUser = {
            nome,
            email,
            foto: null,
            acesso: 'user'
        }

        try {
            const user = await prisma.usuario.create({ data: newUser })
            const token = await createUserToken(user, req, res)

            return res.status(201).json({ status: 201, message: 'Registro feito com sucesso.', error: false, data: safeUser, token })

        } catch(e) {
            return res.status(500).json({ status: 500, message: "Falha ao registrar.", error: true })
        }
        
    }

    static async login(req, res) {
        const { email, senha } = req.body || {}

        if(!email || !senha) return res.status(400).json({ status: 400, message: 'Preencha todos os campos.', error: true })
        
        const user = await prisma.usuario.findFirst({ where: { AND: [{ email: email }, { deletedAt: null }] } })

        if(!user) return res.status(400).json({ status: 400, message: 'O email não está cadastrado.', error: true })

        const checkPassword = await bcrypt.compare(senha, user.senha)
        if(!checkPassword) return res.status(400).json({ status: 400, message: 'Senha ou email incorreto(s)', error: true })

        const safeUser = {
            nome: user.nome,
            email,
            foto: null,
            acesso: user.acesso
        }

        try {
            const token = await createUserToken(user, req, res)
            return res.status(201).json({ status: 201, message: 'Login feito com sucesso.', error: false, data: safeUser, token })

        } catch(e) {
            res.status(500).json({ status: 500, message: 'Falha ao logar.', error: true })
        }
    }
}