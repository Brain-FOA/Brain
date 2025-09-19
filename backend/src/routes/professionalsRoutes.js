import { Router } from "express";
export const router = Router()

import { ProfessionalsController } from "../controllers/ProfessionalsController.js";

router.post("/register",  ProfessionalsController.register)

router.patch("/accept/:id",  ProfessionalsController.accept)
router.patch("/reject/:id",  ProfessionalsController.reject)

router.get("/accepted", ProfessionalsController.acceptedProfessionals)
router.get("/pending", ProfessionalsController.awaitPermissionProfessionals)