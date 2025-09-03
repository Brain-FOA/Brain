// prisma client
import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export class SpecialtiesController {
    static async view(req, res) {
        try {
            const specialties = await prisma.especialidade.findMany({orderBy: { id: 'asc' }})

            return res.status(201).json({ status: 201, message: 'Trazendo todas as especialidades.', error: false, data: specialties })

        } catch(e) {
            res.status(500).json({ status: 500, message: e, error: true })
        }
    }

    static async register(req, res) {
        const { nome } = req.body || {}

        if(!nome) return res.status(400).json({ status: 400, message: 'Preencha o campo.', error: true })

        const specialtieExist = await prisma.especialidade.findUnique({ where: { nome: nome } }) || null
        if(specialtieExist) return res.status(400).json({ status: 400, message: 'Especialidade ja cadastrada.', error: true })

        try {
            const specialtie = await prisma.especialidade.create({ data: { nome } })
            return res.status(201).json({ status: 201, message: 'Especialidade criada com sucesso.', error: false, data: specialtie })

        } catch(e) {
            res.status(500).json({ status: 500, message: e, error: true })
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const { nome } = req.body || {}

        if(!nome) return res.status(400).json({ status: 400, message: 'Preencha o campo.', error: true })

        const specialtieExist = await prisma.especialidade.findUnique({ where: { nome: nome } })
        if(specialtieExist) return res.status(400).json({ status: 400, message: 'Especialidade ja cadastrada.', error: true })

        try {
            const specialtie = await prisma.especialidade.update({ where: { id: Number(id) }, data: { nome: nome } })
            return res.status(201).json({ status: 201, message: 'Especialidade editada com sucesso.', error: false, data: specialtie })

        } catch(e) {
            res.status(500).json({ status: 500, message: e, error: true })
        }
    }

    static async delete(req, res) {
        const { id } = req.params

        try {
            const specialtie = await prisma.especialidade.delete({ where: { id: Number(id) } })

            return res.status(201).json({ status: 201, message: 'Especialidade excluida com sucesso.', error: false })

        } catch(e) {
            res.status(500).json({ status: 500, message: e, error: true })
        }
    }
}