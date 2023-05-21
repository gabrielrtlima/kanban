import { Router } from 'express';
import { UserController } from '../controllers/UserController';

export const user = Router();

user.post('', UserController.create)
