import { getToken } from '../helpers/get-token.js'
import { getUserByToken } from '../helpers/get-user-by-token.js'

export const verifyUserAccess = async (req, res, next) => {
    try {
        const token = getToken(req)

        if (!token) {
            return res.status(401).json({ status: 401, message: 'Acesso negado.', error: true })
        }

        const { email } = req.body || {}
        const userTokenData = await getUserByToken(token, req, res)

        if (!userTokenData || userTokenData.email !== email) {
            return res.status(401).json({ status: 401, message: 'Permissão negada (confira o email).', error: true })
        }
        
        next()
        
    } catch (e) {
        res.status(500).json({ status: 500, message: 'Permissão negada.', error: true })
    }
}
