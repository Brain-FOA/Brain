import express from 'express'
import cors from "cors"
const app = express()

// configs
app.use(cors({
    origin: "*"
}))

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('./public'))

const PORT = process.env.PORT
const HOST = process.env.HOST

import { router as authRouter } from './routes/authRoutes.js'
import { router as userRouter } from './routes/userRoutes.js'
import { router as specialtiesRoutes } from './routes/specialtiesRoutes.js'
import { router as feedbacksRoutes } from './routes/FeedbacksRoutes.js';

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/specialties', specialtiesRoutes)
app.use('/feedbacks', feedbacksRoutes)

app.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`)
})