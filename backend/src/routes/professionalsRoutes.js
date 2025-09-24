import { Router } from "express";
export const router = Router()

import { ProfessionalsController } from "../controllers/ProfessionalsController.js";

import { verifyToken } from "../middlewares/verify-token.js";
import { verifyAccessAdmin } from "../middlewares/verify-acess-admin.js";

router.post("/register",  ProfessionalsController.register)

router.patch("/accept/:id", verifyToken, verifyAccessAdmin, ProfessionalsController.accept)
router.delete("/reject/:id", verifyToken, verifyAccessAdmin, ProfessionalsController.reject)

router.get("/accepted",  ProfessionalsController.acceptedProfessionals)
router.get("/pending", ProfessionalsController.awaitPermissionProfessionals)
router.get("/stats", ProfessionalsController.dashboardStats)