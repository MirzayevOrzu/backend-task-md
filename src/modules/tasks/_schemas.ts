import Joi from "joi";
import { SortOrder, UserRole } from "../../shared/types";

export const addTaskSchema = {
    body: Joi.object({
        title: Joi.string().trim().required(),
        userId: Joi.string(),
    }),
};

export const listTasksSchema = {
    query: Joi.object({
        offset: Joi.number().integer().min(0),
        limit: Joi.number().integer().min(5),
        q: Joi.string().min(1),
        sortBy: Joi.string().valid("createdAt", "updatedAt", "title"),
        order: Joi.string().valid(SortOrder.ASC, SortOrder.DESC),
        completed: Joi.boolean(),
    }),
};

export const editTaskSchema = {
    body: Joi.object({
        title: Joi.string().trim(),
    }),
};
