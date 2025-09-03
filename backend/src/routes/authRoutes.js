import { Router } from "express";
export const router = Router()

import { AuthController } from "../controllers/AuthController.js";

router.post("/register",  AuthController.register)
router.post("/login", AuthController.login)


