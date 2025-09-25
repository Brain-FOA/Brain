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
                message: 'Especialidade não existe.',
                error: true
            })
        }

        const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
        if (!cpfRegex.test(cpf)) 
            return res.status(400).json({ status: 400, message: 'CPF inválido.', error: true });

        const crpRegex = /^\d{5,10}$/;
        if (!crpRegex.test(crp))
            return res.status(400).json({ status: 400, message: 'CRP inválido.', error: true });

        const cepRegex = /^\d{5}-?\d{3}$/;
        if (!cepRegex.test(cep))
            return res.status(400).json({ status: 400, message: 'CEP inválido.', error: true });

        const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
        if (!telefoneRegex.test(telefone))
        return res.status(400).json({ status: 400, message: 'Telefone inválido.', error: true });

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

    static async accept(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ status: 400, message: "ID inválido", error: true });
        }

        const professionalExist = await prisma.professional.findUnique({ where: { usuarioId: parseInt(id) }})
        
        if(!professionalExist) {
            return res.status(400).json({ status: 400, message: "Profissional não encontrado.", error: true });
        }

        try {
            const updated = await prisma.professional.update({
                where: { usuarioId: parseInt(id) },
                data: { aprovacao: true }
            });

            return res.status(200).json({
                status: 200,
                message: "Profissional aprovado com sucesso.",
                error: false,
                data: updated
            });

        } catch (e) {
            return res.status(500).json({ status: 500, message: "Falha ao aprovar profissional.", error: true, details: e.message });
        }
    }

    static async reject(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ status: 400, message: "ID inválido.", error: true });
        }

        const professionalExist = await prisma.professional.findUnique({ where: { usuarioId: parseInt(id) }});

        if(!professionalExist) {
            return res.status(400).json({ status: 400, message: "Profissional não encontrado.", error: true });
        }

        try {
            // Deleta o registro profissional
            await prisma.professional.delete({
                where: { usuarioId: parseInt(id) }
            });

            return res.status(200).json({
                status: 200,
                message: "Profissional rejeitado com sucesso.",
                error: false
            });

        } catch (e) {
            return res.status(500).json({ status: 500, message: "Falha ao remover profissional.", error: true, details: e.message });
        }
    }

    static async awaitPermissionProfessionals(req, res) {
        const { page = 1 } = req.query;
        const limit = 2;
        const currentPage = parseInt(page);
        const skip = (currentPage - 1) * limit;

        try {
            const [professionals, total] = await Promise.all([
                prisma.professional.findMany({
                    where: { aprovacao: null },
                    skip,
                    take: limit,
                    include: {
                        usuario: {
                            select: {
                                id: true,
                                nome: true,
                                email: true,
                                foto: true,
                                acesso: true,
                                endereco: {
                                    select: {
                                        cep: true,
                                        cidade: true,
                                        bairro: true,
                                        numero: true
                                    }
                                }
                            }
                        },
                        especialidade: true
                    }
                }),
                prisma.professional.count({ where: { aprovacao: null } })
            ]);


            const totalPages = Math.ceil(total / limit);
            const baseUrl = `http://127.0.0.1:3000/professionals/accepted`;

            if(page <= 0) {
                return res.status(400).json({ status: 400, message: 'Sem profissionais', error: true })
            }

            if(totalPages < page) {
                return res.status(400).json({ status: 400, message: 'Página não encontrada.', error: true })
            }

            return res.status(200).json({
                status: 200,
                error: false,
                message: "Profissionais aprovados listados com sucesso.",
                data: professionals,
                pagination: {
                    total,
                    page: currentPage,
                    nextPage: currentPage < totalPages ? currentPage + 1 : null,
                    prevPage: currentPage <= totalPages && currentPage - 1  != 0 ? currentPage - 1 : null,
                    totalPages,
                    next: currentPage < totalPages ? `${baseUrl}?page=${currentPage + 1}` : null,
                    prev: currentPage > 1 ? `${baseUrl}?page=${currentPage - 1}` : null
                }
            });

        } catch (e) {
            return res.status(500).json({
                status: 500,
                message: "Página não encontrada.",
                error: true,
                // details: e.message
            });
        }
    }

    static async acceptedProfessionals(req, res) {
        const { page = 1 } = req.query;
        const limit = 2;
        const currentPage = parseInt(page);
        const skip = (currentPage - 1) * limit;

        try {
            const [professionals, total] = await Promise.all([
                prisma.professional.findMany({
                    where: { aprovacao: true },
                    skip,
                    take: limit,
                    include: {
                        usuario: {
                            select: {
                                id: true,
                                nome: true,
                                email: true,
                                foto: true,
                                acesso: true,
                                endereco: {
                                    select: {
                                        cep: true,
                                        cidade: true,
                                        bairro: true,
                                        numero: true
                                    }
                                }
                            }
                        },
                        especialidade: true
                    }
                }),
                prisma.professional.count({ where: { aprovacao: true } })
            ]);


            const totalPages = Math.ceil(total / limit);
            const baseUrl = `http://127.0.0.1:3000/professionals/accepted`;

            if(page <= 0) {
                return res.status(400).json({ status: 400, message: 'Sem profissionais', error: true })
            }

            if(totalPages < page) {
                return res.status(400).json({ status: 400, message: 'Página não encontrada.', error: true })
            }

            return res.status(200).json({
                status: 200,
                error: false,
                message: "Profissionais aprovados listados com sucesso.",
                data: professionals,
                pagination: { 
                    total,
                    page: currentPage,
                    nextPage: currentPage < totalPages ? currentPage + 1 : null,
                    prevPage: currentPage <= totalPages && currentPage - 1  != 0 ? currentPage - 1 : null,
                    totalPages,
                    next: currentPage < totalPages ? `${baseUrl}?page=${currentPage + 1}` : null,
                    prev: currentPage > 1 ? `${baseUrl}?page=${currentPage - 1}` : null
                }
            });

        } catch (e) {
            return res.status(500).json({
                status: 500,
                message: "Página não encontrada.",
                error: true,
                // details: e.message
            });
        }
    }

    static async dashboardStats(req, res) {
        try {
            const [totalProfessionals, pendingProfessionals, activeProfessionals] = await Promise.all([
                prisma.professional.count(), // todos
                prisma.professional.count({ where: { aprovacao: null } }), // pendentes
                prisma.professional.count({ where: { aprovacao: true } }) // ativos/aprovados
            ]);

            return res.status(200).json({
                status: 200,
                error: false,
                message: "Estatísticas do dashboard carregadas com sucesso.",
                stats: {
                    totalProfessionals,
                    pendingProfessionals,
                    activeProfessionals
                }
            });

        } catch (e) {
            console.error(e);
            return res.status(500).json({
                status: 500,
                error: true,
                message: "Erro ao carregar estatísticas.",
                details: e.message
            });
        }
    }
}
