import { Request, Response } from "express";
import { Task as TaskModel } from "../models/Task";
import { User as UserModel } from "../models/User";

interface TaskDTO {
  content: string;
  description: string;
  id: string;
  user: [string]
}

interface Task {
  content: string;
  description: string;
  id: string;
  user: User[]
}

interface User {
  nome: string,
  email: string,
  photo: string
}

export const TaskController = {
  create: async (req: Request, res: Response) => {
    try {
      const taskReq: TaskDTO = {
        id: req.body.id,
        content: req.body.content,
        description: req.body.description,
        user: req.body.user
      }


      const userList: User[] = [];
      for(let i = 0; i < taskReq.user.length; i++){
        const user : User = await UserModel.findOne({ email: taskReq.user[i]});
        if(!user){
          return res.status(404).json({
            message: "User not found",
            email: taskReq.user[i]
          });
        }

        userList.push(user)
      }

      const task : Task = {
        id: req.body.id,
        content: req.body.content,
        description: req.body.description,
        user: userList
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
      const user = await UserModel.find({ email: req.query.email})

      if(!user) {
        return res.status(500).send("User not found")
      }

      const result = await TaskModel.find({ user: {$in: user} });

      res.status(200).json({
        message: "Tasks found successfully by email",
        result
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
      });
      console.log(error)
    }
  }

}