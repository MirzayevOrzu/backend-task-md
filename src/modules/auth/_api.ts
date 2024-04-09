import express from "express";
import { postLogin, postRegister } from "./_controllers";

const authRouter = express.Router();

authRouter.post("/register", postRegister);
authRouter.post("/login", postLogin);

export default authRouter;
