import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

import { getToken } from '../helpers/get-token.js';
import { getUserByToken } from '../helpers/get-user-by-token.js';

export class FeedbacksController {
    static async viewAll(req, res) {
        try {
            const feedbacks = await prisma.feedback.findMany({orderBy: { id: 'asc' }, include: { usuario: { select: { email: true } }
            }})

            return res.status(200).json({ status: 200, message: 'Trazendo todos os feedbacks.', error: false, data: feedbacks })

        } catch(e) {
            res.status(500).json({ status: 500, message: e, error: true })
        }
    }

    static async viewUser(req, res) {
        try {
            const token = await getToken(req)
            const user = await getUserByToken(token, req, res)

            const userFeedbacks = await prisma.feedback.findMany({where: { userId: user.id }, orderBy: { id: 'asc' }})

            return res.status(200).json({ status: 200, message: 'Trazendo todos os feedbacks do usuário.', error: false, data: userFeedbacks })

        } catch(e) {
            res.status(500).json({ status: 500, message: e, error: true })
        }
    }

    static async register(req, res) {
        const { titulo, conteudo } = req.body || {}

        if(!titulo || !conteudo) return res.status(400).json({ status: 400, message: 'Preencha todos os campos.', error: true })

        try {
            const token = await getToken(req)
            const user = await getUserByToken(token, req, res)

            const newFeedback = await prisma.feedback.create({data: { titulo, conteudo, userId: user.id }});

            return res.status(201).json({ status: 201, message: 'Feedback registrado com sucesso.', error: false, data: newFeedback })

        } catch(e) {
            res.status(500).json({ status: 500, message: e, error: true })
        }
    }

    static async delete(req, res) {
        const { id } = req.params

        const feedback = await prisma.feedback.findUnique({ where: { id: Number(id) } })

        const token = getToken(req)
        const user = await getUserByToken(token, req, res)

        if(!id) return res.status(400).json({ status: 401, message: 'ID inválido.', error: true })

        if(feedback.userId !== user.id && user.acesso != 'admin') return res.status(401).json({ status: 401, message: 'Permissão negada.', error: true })

        try {
            await prisma.feedback.delete({ where: { id: Number(id) } })
            return res.status(200).json({ status: 200, message: 'Feedback excluido com sucesso.', error: false, data: feedback })

        } catch(e) {
            res.status(500).json({ status: 500, message: e, error: true })
        }
    }
    
    static async update(req, res) {
        const { titulo, conteudo } = req.body || {};
        const { id } = req.params;

        const token = await getToken(req);
        const user = await getUserByToken(token, req, res);

        const feedback = await prisma.feedback.findUnique({
            where: { id: Number(id) }
        });

        if (!feedback) {
            return res.status(404).json({ status: 404, message: 'Feedback não encontrado.', error: true });
        }

        if (feedback.userId !== user.id) {
            return res.status(403).json({ status: 403, message: 'Permissão negada.', error: true });
        }

        if (!id) {
            return res.status(400).json({ status: 400, message: 'ID inválido.', error: true });
        }

        if (!titulo || !conteudo) {
            return res.status(400).json({ status: 400, message: 'Preencha todos os campos.', error: true });
        }

        try {
            const updatedFeedback = await prisma.feedback.update({
                where: { id: Number(id) },
                data: {
                    titulo,
                    conteudo,
                }
            });

            return res.status(200).json({ status: 200, message: 'Feedback atualizado com sucesso.', error: false, data: updatedFeedback });

        } catch (e) {
            console.error(e);
            return res.status(500).json({ status: 500, message: 'Erro interno do servidor.', error: true });
        }
    }

}