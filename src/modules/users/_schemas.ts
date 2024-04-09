import Joi from "joi";
import { SortOrder, UserRole } from "../../shared/types";

export const addUserSchema = {
    body: Joi.object({
        firstName: Joi.string().trim().required(),
        lastName: Joi.string().trim().required(),
        username: Joi.string().trim().min(6).required(),
        email: Joi.string().email().required(),
        role: Joi.string().valid(UserRole.ADMIN, UserRole.USER),
        password: Joi.string().trim().min(6).required(),
    }),
};

export const listUsersSchema = {
    query: Joi.object({
        offset: Joi.number().integer().min(0),
        limit: Joi.number().integer().min(5),
        q: Joi.string().min(1),
        sortBy: Joi.string().valid(
            "createdAt",
            "updatedAt",
            "firstName",
            "lastName"
        ),
        order: Joi.string().valid(SortOrder.ASC, SortOrder.DESC),
        role: Joi.string().valid(UserRole.ADMIN, UserRole.USER),
    }),
};

export const editUserSchema = {
    body: Joi.object({
        firstName: Joi.string().trim().required(),
        lastName: Joi.string().trim().required(),
        username: Joi.string().trim().min(6).required(),
        email: Joi.string().email().required(),
        role: Joi.string().valid(UserRole.ADMIN, UserRole.USER),
    }),
};
