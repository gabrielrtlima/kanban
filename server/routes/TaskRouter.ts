import { Router } from 'express';
import { TaskController } from '../controllers/TaskController';

export const task = Router();

task.post('', TaskController.create)
task.get('', TaskController.findAll)
task.get('/user', TaskController.findByUser)