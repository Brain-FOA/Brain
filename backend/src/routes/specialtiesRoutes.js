import { Router } from "express";
export const router = Router()

import { SpecialtiesController } from "../controllers/SpecialtiesController.js";

import { verifyToken } from "../middlewares/verify-token.js";
import { verifyAccessAdmin } from "../middlewares/verify-acess-admin.js";

router.get('/view', SpecialtiesController.view)
router.post('/register', verifyToken, verifyAccessAdmin, SpecialtiesController.register)
router.put('/update/:id', verifyToken, verifyAccessAdmin, SpecialtiesController.update)
router.delete('/delete/:id', verifyToken, verifyAccessAdmin, SpecialtiesController.delete)


