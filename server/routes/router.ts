import { Router } from "express";
import { user } from "./UserRouter";
import { task } from "./TaskRouter";
import { column } from "./ColumnRouter";
import { auth } from "./AuthRouter";
import { verifyToken } from "../middleware/auth";
export const router = Router();

router.use("/user", user);
// router.use("/task", verifyToken, task)
router.use("/task", task)
// router.use("/column", verifyToken, column)
router.use("/column", column)
router.use("/auth", auth)