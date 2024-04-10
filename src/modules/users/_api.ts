import express from "express";
import {
    deleteUser,
    getProfile,
    getUser,
    getUsers,
    patchProfile,
    patchUser,
    postUser,
} from "./_controllers";
import { hasRole, isLoggedIn } from "../../shared/middlewares";
import { UserRole } from "../../shared/types";

const usersRouter = express.Router();

usersRouter.use(isLoggedIn);

usersRouter.post("/users", hasRole([UserRole.ADMIN]), postUser);
usersRouter.get("/users", hasRole([UserRole.ADMIN]), getUsers);
usersRouter.get("/users/:id", hasRole([UserRole.ADMIN]), getUser);
usersRouter.get("/users/profile", getProfile);
usersRouter.patch("/users/:id", hasRole([UserRole.ADMIN]), patchUser);
usersRouter.patch("/users/profile", patchProfile);
usersRouter.delete("/users/:id", hasRole([UserRole.ADMIN]), deleteUser);

export default usersRouter;
