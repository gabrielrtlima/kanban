import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

export const auth = Router();

auth.get('/google', AuthController.googleAuth)
auth.get('/google/callback', AuthController.googleAuthCallback, AuthController.redirectAuthSuccess)
auth.get('/success', AuthController.authSuccess)
auth.get('/login', AuthController.login)
auth.post('/register', AuthController.register)
