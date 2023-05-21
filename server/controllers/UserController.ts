import { Request, Response } from "express";
import { User as UserModel } from "../models/User";

interface User{
  name: string;
  email: string;
  photo: string;
}

export const UserController = {
  create: async (req: Request, res: Response) => {

    try {
      const User : User = {
        name: req.body.name,
        email: req.body.email,
        photo: req.body.photo
      }
    
      const result = await UserModel.create(User);
  
      res.status(201).json({
        message: "User created successfully",
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