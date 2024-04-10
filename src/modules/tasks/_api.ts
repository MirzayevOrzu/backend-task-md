import express from "express";
import { hasRole, isLoggedIn } from "../../shared/middlewares";
import {
    deleteTask,
    getCountTasksByUser,
    getTask,
    getTasks,
    patchTask,
    postCompleteTask,
    postTask,
} from "./_controllers";
import { UserRole } from "../../shared/types";

const tasksRouter = express.Router();

tasksRouter.use(isLoggedIn);

tasksRouter.post("/tasks", postTask);
tasksRouter.get("/tasks", getTasks);
tasksRouter.get("/tasks/stats", hasRole([UserRole.ADMIN]), getCountTasksByUser);
tasksRouter.get("/tasks/:id", getTask);
tasksRouter.patch("/tasks/:id", patchTask);
tasksRouter.delete("/tasks/:id", deleteTask);
tasksRouter.post("/tasks/:id/complete", postCompleteTask);

export default tasksRouter;
