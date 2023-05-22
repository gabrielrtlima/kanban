import { Request, Response } from "express";
import { Column as ColumnModel } from "../models/Column";

interface Column{
  id: number;
  title: string;
  taskIds: number[];
}

export const ColumnController = {
  create: async (req: Request, res: Response) => {
    try {
      const column = await ColumnModel.create(req.body);

      res.status(201).json({
        message: "Column created successfully",
        column
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
    }
  },

  findAll: async (req: Request, res: Response) => {
    try {
      const result = await ColumnModel.find();

      res.status(200).json({
        message: "Columns found successfully",
        result
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
    }
  },

  update: async (req: Request, res: Response) => {

    try {
      const taskId = req.body.taskIds[0];
      const oldColumn: Column | null = await ColumnModel.findOne({ taskIds: taskId });
      if (oldColumn) {
        const index = oldColumn.taskIds.indexOf(taskId);
        oldColumn.taskIds.splice(index, 1);
        await ColumnModel.updateOne(
          { id: oldColumn.id },
          { $set: { taskIds: oldColumn.taskIds } }
        );
      }
  
      const newColumn: Column | null = await ColumnModel.findOne({ id: req.params.id });
  
      if (newColumn) {
        newColumn.taskIds.push(taskId);
        await ColumnModel.updateOne(
          { id: newColumn.id },
          { $set: { taskIds: newColumn.taskIds } }
        );
  
        res.status(200).json({
          message: "Column updated successfully",
        });
      }
     }catch (error) {
      console.log(error)
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  }
}