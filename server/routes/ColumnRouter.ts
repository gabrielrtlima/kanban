import { Router } from "express";
import { ColumnController } from "../controllers/ColumnController";

export const column = Router();

// column.post('', ColumnController.create)
column.get('', ColumnController.findAll)
column.put('/:id', ColumnController.update)