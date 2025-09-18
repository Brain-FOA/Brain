// prisma client
import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

import bcrypt from 'bcrypt'
import { createUserToken } from '../helpers/create-user-token.js';

export class ProfessionalsController {
    static async register(req, res) {
        const { 
            nome, email, senha, confirmaSenha, 
            cep, cidade, bairro, numero, 
            telefone, cpf, crp, descricao, especialidadeId 
        } = req.body || {}

        if (!nome || !email || !senha || !confirmaSenha || !cep || !cidade || !bairro || !numero || !telefone || !cpf || !crp || !descricao || !especialidadeId)
            return res.status(400).json({ status: 400, message: 'Preencha todos os campos.', error: true })
        
        if (senha.length < 6) 
            return res.status(400).json({ status: 400, message: 'A senha deve conter no mínimo 6 caracteres.', error: true })

        if (senha !== confirmaSenha) 
            return res.status(400).json({ status: 400, message: 'As senhas não coincidem.', error: true })
        
        const userExist = await prisma.usuario.findUnique({ where: { email } })
        if (userExist) 
            return res.status(400).json({ status: 400, message: 'O email está indisponível.', error: true })

        const especialidadeExist = await prisma.especialidade.findUnique({ where: { id: especialidadeId }})

        if (!especialidadeExist) {
            return res.status(400).json({
                status: 400,
                message: 'Especialidade inválida.',
                error: true
            })
        }

        const professionalCPF = await prisma.professional.findUnique({ where: { cpf }})

        if (professionalCPF) {
            return res.status(400).json({
                status: 400,
                message: 'Esse CPF ja foi cadastrado em uma conta profissional.',
                error: true
            })
        }

        const professionalCRP = await prisma.professional.findUnique({ where: { crp }})

        if (professionalCRP) {
            return res.status(400).json({
                status: 400,
                message: 'Esse CRP ja foi cadastrado em uma conta profissional.',
                error: true
            })
        }

        const professionalTelefone = await prisma.professional.findUnique({ where: { crp }})

        if (professionalTelefone) {
            return res.status(400).json({
                status: 400,
                message: 'Esse telefone ja foi cadastrado em uma conta profissional.',
                error: true
            })
        }

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(senha, salt)

        try {
            // Criar usuário com endereço e dados profissionais
            const user = await prisma.usuario.create({
                data: {
                    nome,
                    email,
                    senha: passwordHash,
                    acesso: 'professional',
                    endereco: {
                        create: {
                            cep,
                            cidade,
                            bairro,
                            numero
                        }
                    },
                    profissional: {
                        create: { 
                            telefone,
                            cpf,
                            crp,
                            descricao,
                            especialidadeId
                        }
                    }
                },
                include: { 
                    endereco: true,
                    profissional: { include: { especialidade: true } } 
                }
            })

            const token = await createUserToken(user, req, res)

            return res.status(201).json({
                status: 201,
                message: 'Registro feito com sucesso.',
                error: false,
                data: {
                    id: user.id,
                    nome: user.nome,
                    email: user.email,
                    foto: user.foto,
                    acesso: user.acesso,
                    profissionalData: { ...user.profissional },
                    endereco: { ...user.endereco }   
                },
                token
            })

        } catch (e) {
            console.error(e)
            return res.status(500).json({ status: 500, message: "Falha ao registrar.", error: true, details: e.message })
        }
    }
}
