import Joi from "joi";

export const registerUserSchema = {
    body: Joi.object({
        firstName: Joi.string().trim().required(),
        lastName: Joi.string().trim().required(),
        email: Joi.string().email().required(),
        password: Joi.string().trim().min(6).required(),
    }),
};

export const loginUserSchema = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().trim().min(6).required(),
    }),
};
