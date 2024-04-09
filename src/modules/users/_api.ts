import express from "express";
import {
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

usersRouter.post("/users", isLoggedIn, hasRole([UserRole.ADMIN]), postUser);
usersRouter.get("/users", isLoggedIn, hasRole([UserRole.ADMIN]), getUsers);
usersRouter.get("/users/:id", isLoggedIn, hasRole([UserRole.ADMIN]), getUser);
usersRouter.get("/users/profile", isLoggedIn, getProfile);
usersRouter.patch(
    "/users/:id",
    isLoggedIn,
    hasRole([UserRole.ADMIN]),
    patchUser
);
usersRouter.patch("/users/profile", isLoggedIn, patchProfile);
usersRouter.delete("/users/:id", isLoggedIn, hasRole([UserRole.ADMIN]));

export default usersRouter;
