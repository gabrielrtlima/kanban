import { Request, Response } from "express";
import { Task as TaskModel } from "../models/Task";
import { User as UserModel } from "../models/User";
import { Column as ColumnModel } from "../models/Column";

interface TaskDTO {
  content: string;
  description: string;
  id: string;
  users: [string];
  status: string;
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

interface Column {
  id: string,
  title: string,
  taskIds: [string]
}

export const TaskController = {
  create: async (req: Request, res: Response) => {
    try {
      const taskReq: TaskDTO = {
        id: autoGenerateId(),
        content: req.body.content,
        description: req.body.description,
        users: req.body.users,
        status: req.body.status
      }

      const userList: User[] = [];
      for(let i = 0; i < taskReq.users.length; i++){
        const user : User = await UserModel.findOne({ email: taskReq.users[i]});
        if(!user){
          return res.status(404).json({
            message: "User not found",
            email: taskReq.users[i]
          });
        }

        userList.push(user)
      }

      const task : Task = {
        id: taskReq.id,
        content: taskReq.content,
        description: taskReq.description,
        user: userList
      }

      const result = await TaskModel.create(task);

      const column : Column | null = await ColumnModel.findOne({ id: taskReq.status })
      column!.taskIds.push(task.id);
      const columnUpdate = await ColumnModel.updateOne( 
        { id: parseInt(taskReq.status) },
        { $set: { taskIds: column!.taskIds }}
      )
      

      return res.status(201).json({
        message: "Task created successfully",
        result,
        columnUpdate
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
  },

  delete: async (req: Request, res: Response) => {
    try {
      const column : Column | null = await ColumnModel.findOne({ taskIds: req.params.id });
      
      if (column) {
        const index = column.taskIds.indexOf(req.params.id);
        column.taskIds.splice(index, 1);
        await ColumnModel.updateOne(
          { id: parseInt(column.id) },
          { $set: { taskIds: column.taskIds } }
        );
      }

      const result = await TaskModel.deleteOne({ id: req.params.id });

      res.status(200).json({
        message: "Task deleted successfully",
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

const autoGenerateId: () => string = () => {
  return Math.random().toString(36).substr(2, 9);
 }