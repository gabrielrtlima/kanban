import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { verifyToken } from '../middleware/auth';

export const user = Router();

user.post('', UserController.create)

user.get('', verifyToken ,UserController.findByEmail)