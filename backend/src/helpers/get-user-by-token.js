import jwt from 'jsonwebtoken'

import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const getUserByToken = async(token, req, res) => {
    if(!token) return res.status(401).json({ status: 401, message: 'Acesso negado.', error: true })

    const decoded = jwt.verify(token, process.env.SECRET)

    const userID = decoded.id

    const user = await prisma.usuario.findUnique({ where: { id: userID }})

    return user
}
