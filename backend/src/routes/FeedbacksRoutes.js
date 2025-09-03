import { Router } from "express";
export const router = Router()

import { FeedbacksController } from "../controllers/FeedbacksController.js";

import { verifyToken } from "../middlewares/verify-token.js";
import { verifyAccessAdmin } from "../middlewares/verify-acess-admin.js";

router.get('/viewAll', verifyToken, verifyAccessAdmin, FeedbacksController.viewAll)

router.get('/viewUser', verifyToken, FeedbacksController.viewUser)

router.post('/register', verifyToken, FeedbacksController.register)

router.delete('/delete/:id', verifyToken, FeedbacksController.delete)

router.patch('/update/:id', verifyToken, FeedbacksController.update)

