import { Router } from "express";
export const router = Router()

import { UserController } from "../controllers/UserController.js";

import { verifyToken } from "../middlewares/verify-token.js";
import { verifyUserAccess } from "../middlewares/verify-user-acess.js";
import { imageUpload } from "../middlewares/image-upload.js";

router.patch('/update', verifyToken, imageUpload.single("foto"), UserController.update)
router.patch('/delete', verifyToken, verifyUserAccess, UserController.delete)


