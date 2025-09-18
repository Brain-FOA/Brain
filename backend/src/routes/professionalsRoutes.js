import { Router } from "express";
export const router = Router()

import { ProfessionalsController } from "../controllers/ProfessionalsController.js";

router.post("/register",  ProfessionalsController.register)