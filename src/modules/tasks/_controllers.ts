import { validate } from "../../shared/middlewares";
import { Handler, UserRole } from "../../shared/types";
import { addTaskSchema, editTaskSchema, listTasksSchema } from "./_schemas";
import { AddTaskData, ListTasksData } from "./_types";
import addTask from "./add-task";
import completeTask from "./complete-task";
import countTasksByUser from "./count-tasks-by-user";
import editTask from "./edit-task";
import listTasks from "./list-tasks";
import removeTask from "./remove-task";
import showTask from "./show-task";

export const postTask: Handler = [
    validate(addTaskSchema),
    async (req, res, next) => {
        try {
            let input = {};

            if (req.user!.role !== UserRole.ADMIN) {
                const { userId, ...allowedInput } = req.body;
                input = { userId: req.user!.id, ...allowedInput };
            } else {
                input = req.body;
            }

            const data = await addTask(input as AddTaskData);

            res.status(201).json({ data });
        } catch (error) {
            next(error);
        }
    },
];

export const getTasks: Handler = [
    validate(listTasksSchema),
    async (req, res, next) => {
        try {
            let input: ListTasksData = req.query;

            if (req.user!.role == UserRole.USER) {
                input.userId = req.user!.id;
            } else {
                input.select = ["user"];
            }

            const data = await listTasks(input);

            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    },
];

export const getTask: Handler = [
    async (req, res, next) => {
        try {
            let data;

            if (req.user!.role === UserRole.USER) {
                data = await showTask({
                    _id: req.params.id,
                    userId: req.user!.id,
                });
            } else {
                data = await showTask({ _id: req.params.id, select: ["user"] });
            }

            res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    },
];

export const patchTask: Handler = [
    validate(editTaskSchema),
    async (req, res, next) => {
        try {
            let data;

            if (req.user!.role === UserRole.USER) {
                data = await editTask(
                    { _id: req.params.id, userId: req.user!.id },
                    req.body
                );
            } else {
                data = await editTask({ _id: req.params.id }, req.body);
            }

            res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    },
];

export const deleteTask: Handler = [
    async (req, res, next) => {
        try {
            let data;

            if (req.user!.role === UserRole.USER) {
                data = await removeTask({
                    _id: req.params.id,
                    userId: req.user!.id,
                });
            } else {
                data = await removeTask({
                    _id: req.params.id,
                });
            }

            res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    },
];

export const postCompleteTask: Handler = [
    async (req, res, next) => {
        try {
            let data;

            if (req.user!.role === UserRole.USER) {
                data = await completeTask({
                    _id: req.params.id,
                    userId: req.user!.id,
                });
            } else {
                data = await completeTask({
                    _id: req.params.id,
                });
            }

            res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    },
];

export const getCountTasksByUser: Handler = [
    async (req, res, next) => {
        try {
            const data = await countTasksByUser();

            res.status(200).json({ data });
        } catch (error) {
            next(error);
        }
    },
];
