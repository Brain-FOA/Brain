// prisma client
import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

import bcrypt from 'bcrypt';
import { createUserToken } from '../helpers/create-user-token.js';
import { getToken } from '../helpers/get-token.js';
import { getUserByToken } from '../helpers/get-user-by-token.js';

export class UserController {
    static async update(req, res) {
        const { nome, email, senha, novaSenha, confirmaNovaSenha } = req.body || {}
        
        if(!nome || !email || !senha) return res.status(400).json({ status: 400, message: 'Preencha todos os campos obrigatórios.', error: true })

        const user = await prisma.usuario.findUnique({ where: { email: email } })
        let userSenha = user.senha

        const token = getToken(req)
        const userTokenData = await getUserByToken(token, req, res)
        if (!userTokenData || userTokenData.email !== user.email) {
            return res.status(401).json({ status: 401, message: 'Permissão negada (confira o email).', error: true })
        }

        if(!user) return res.status(400).json({ status: 400, message: 'O email não está cadastrado.', error: true })

        const checkPassword = await bcrypt.compare(senha, user.senha)
        if(!checkPassword) return res.status(400).json({ status: 400, message: 'Senha incorreta.', error: true })

        if(novaSenha && novaSenha !== confirmaNovaSenha) return res.status(400).json({ status: 400, message: 'A nova senha não coincide com a confirmação.', error: true })

        if(novaSenha && novaSenha.length < 6) return res.status(400).json({ status: 400, message: 'A nova senha deve conter no mínimo 6 caracteres.', error: true })
        
        if(novaSenha) {
            const salt = await bcrypt.genSalt(12)
            userSenha = await bcrypt.hash(novaSenha, salt)
        }

        let foto = user.foto

        if(req.file) {
            foto = req.file.filename
        }

        try {
            const updatedUser = await prisma.usuario.update({
                where: { email: email },
                data: { nome: nome, senha: userSenha, foto }
            })

            const token = await createUserToken(updatedUser, req, res)

            res.status(200).json({ status: 200, message: 'Conta editada com sucesso.', error: false, token })

        } catch(e) {
            res.status(500).json({ status: 500, message: 'Falha ao editar.', error: true })
        }
    }

    static async delete(req, res) {
        const { nome, email, senha } = req.body || {}

        if(!nome || !email || !senha) return res.status(400).json({ status: 400, message: 'Preencha todos os campos obrigatórios.', error: true })
            
        const user = await prisma.usuario.findFirst({ where: { AND: [{ email: email }, { deletedAt: null }] } })

        if(!user) return res.status(400).json({ status: 400, message: 'O email não está cadastrado.', error: true })

        const checkPassword = await bcrypt.compare(senha, user.senha)
        if(!checkPassword) return res.status(400).json({ status: 400, message: 'Senha incorreta.', error: true })

        try {
            await prisma.usuario.update({ where: { email: email }, data: { deletedAt: new Date() } })
            res.status(200).json({ status: 200, message: 'Conta excluida com sucesso.', error: false })

        } catch(e) {
            res.status(500).json({ status: 500, message: 'Falha ao deletar.', error: true })
        }
    }
} 
