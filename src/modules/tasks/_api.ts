import express from "express";
import { isLoggedIn } from "../../shared/middlewares";
import {
    deleteTask,
    getTask,
    getTasks,
    patchTask,
    postCompleteTask,
    postTask,
} from "./_controllers";

const tasksRouter = express.Router();

tasksRouter.use(isLoggedIn);

tasksRouter.post("/tasks", postTask);
tasksRouter.get("/tasks", getTasks);
tasksRouter.get("/tasks/:id", getTask);
tasksRouter.patch("/tasks/:id", patchTask);
tasksRouter.delete("/tasks/:id", deleteTask);
tasksRouter.post("/tasks/:id/complete", postCompleteTask);

export default tasksRouter;
