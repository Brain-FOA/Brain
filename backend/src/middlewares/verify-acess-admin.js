import { getToken } from '../helpers/get-token.js'
import { getUserByToken } from '../helpers/get-user-by-token.js'

export const verifyAccessAdmin = async (req, res, next) => {
    try {
        const token = getToken(req)
        const user = await getUserByToken(token, req, res)

        if (user && user.acesso === 'admin') {
            return next()
        }

        return res.status(401).json({ status: 401, message: 'Acesso negado, área restrita para administradores.', error: true })

    } catch (e) {
        return res.status(500).json({ status: 500, message: e.message || e, error: true })
    }
}