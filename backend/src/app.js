import express from 'express'
import cors from "cors"
export const app = express()

// configs
app.use(cors({
    origin: "*"
}))

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('./public'))

import { router as authRouter } from './routes/authRoutes.js'
import { router as userRouter } from './routes/userRoutes.js'
import { router as specialtiesRoutes } from './routes/specialtiesRoutes.js'
import { router as feedbacksRoutes } from './routes/FeedbacksRoutes.js';

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/specialties', specialtiesRoutes)
app.use('/feedbacks', feedbacksRoutes)

