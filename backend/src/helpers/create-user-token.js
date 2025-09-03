import jwt from 'jsonwebtoken'

export const createUserToken = async(user, req, res) => {
    try {
        const token = jwt.sign({
            id: user.id,
            name: user.nome,
            email: user.email,
            photo: user.foto,
            acesso: user.acesso
        }, process.env.SECRET)

        return token
    } catch(e) {
        res.status(500).json({ status: 500, message: "Falha ao criar token.", error: true})
    }
}