import { Request, Response } from "express";
import { Task as TaskModel } from "../models/Task";
import { User as UserModel } from "../models/User";

interface Task {
  content: string;
  description: string;
  id: string;
  user: [String]
}

export const TaskController = {
  create: async (req: Request, res: Response) => {
    try {
      const task: Task = {
        content: req.body.content,
        description: req.body.description,
        id: req.body.id,
        user: req.body.user
      }

      for(let i = 0; i < task.user.length; i++){
        const user = await UserModel.findOne({ email: task.user[i] });
        if(!user){
          res.status(404).json({
            message: "User not found",
            email: task.user[i]
          });
        }
      }

      const result = await TaskModel.create(task);

      res.status(201).json({
        message: "Task created successfully",
        result
      });
    } catch (error) {
      console.log(req.body)
      res.status(500).json({
        message: "Something went wrong",
        error
      });
    }
  },

  findAll: async (req: Request, res: Response) => {
    try {
      const result = await TaskModel.find();

      res.status(200).json({
        message: "Tasks found successfully",
        result
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
    }
  },

  findByUser: async (req: Request, res: Response) => {
    try {
      const result = await TaskModel.find({ user: req.query.email });

      res.status(200).json({
        message: "Tasks found successfully by email",
        result
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error
      });
    }
  }

}