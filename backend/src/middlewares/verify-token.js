import jwt from 'jsonwebtoken'
import { getToken } from '../helpers/get-token.js'

export const verifyToken = (req, res, next) => {
    if(!req.headers.authorization) return res.status(401).json({ message: 'Acesso negado!' })

    const token = getToken(req)
    if(!token) return res.status(401).json({ message: 'Acesso negado!' })

    try{

        const verified = jwt.verify(token, process.env.SECRET)
        req.user = verified
        next()

    } catch(e) {
        return res.status(400).json({ message: 'Token inválido!' })
    }
}