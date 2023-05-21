import { Router } from "express";
import { user } from "./UserRouter";
import { task } from "./TaskRouter";
import { column } from "./ColumnRouter";

export const router = Router();

router.use("/user", user);
router.use("/task", task)
router.use("/column", column)