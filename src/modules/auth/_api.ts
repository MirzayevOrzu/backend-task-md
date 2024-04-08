import express from "express";
import { postLogin, postRegister } from "./_controllers";

const usersRouter = express.Router();

usersRouter.post("/register", postRegister);
usersRouter.post("/login", postLogin);

export default usersRouter;
