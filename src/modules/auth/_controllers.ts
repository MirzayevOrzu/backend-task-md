import { Handler } from "../../shared/types/controller";
import { validate } from "../../shared/middlewares";
import { loginUserSchema, registerUserSchema } from "./_schemas";
import loginUser from "./login-user";
import registerUser from "./register-user";

export const postRegister: Handler = [
    validate(registerUserSchema),
    async (req, res, next) => {
        try {
            const data = await registerUser(req.body);

            res.status(201).json({ data });
        } catch (error) {
            next(error);
        }
    },
];

export const postLogin: Handler = [
    validate(loginUserSchema),
    async (req, res, next) => {
        try {
            const data = await loginUser(req.body);

            res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    },
];
