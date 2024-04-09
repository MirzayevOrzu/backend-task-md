import { validate } from "../../shared/middlewares";
import { Handler } from "../../shared/types";
import { addUserSchema, listUsersSchema, editUserSchema } from "./_schemas";
import addUser from "./add-user";
import editUser from "./edit-user";
import listUsers from "./list-users";
import removeUser from "./remove-user";
import showUser from "./show-user";

export const postUser: Handler = [
    validate(addUserSchema),
    async (req, res, next) => {
        try {
            const data = await addUser(req.body);

            res.status(201).json({ data });
        } catch (error) {
            next(error);
        }
    },
];

export const getUsers: Handler = [
    validate(listUsersSchema),
    async (req, res, next) => {
        try {
            const data = await listUsers(req.query);

            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    },
];

export const getUser: Handler = [
    async (req, res, next) => {
        try {
            const data = await showUser({ id: req.params.id });

            res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    },
];

export const getProfile: Handler = [
    async (req, res, next) => {
        try {
            const data = await showUser({ id: req.user!.id });

            res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    },
];

export const patchUser: Handler = [
    validate(editUserSchema),
    async (req, res, next) => {
        try {
            const data = await editUser(req.params.id, req.body);

            res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    },
];

export const patchProfile: Handler = [
    validate(editUserSchema),
    async (req, res, next) => {
        try {
            const data = await editUser(req.user!.id, req.body);

            res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    },
];

export const deleteUser: Handler = [
    async (req, res, next) => {
        try {
            const data = await removeUser(req.user!.id);

            res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    },
];
