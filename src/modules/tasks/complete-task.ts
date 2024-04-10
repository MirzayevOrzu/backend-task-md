import Task from "../../models/Task";
import { BadRequestError, NotFoundError } from "../../shared/errors";

async function completeTask(filter: { _id: string; userId?: string }) {
    const task = await Task.findOne(filter).lean();

    if (!task) {
        throw new NotFoundError("Task is not found");
    }

    if (task.completed) {
        throw new BadRequestError("Task is already completed");
    }

    await Task.findOneAndUpdate(filter, {
        completed: true,
        whenCompleted: new Date(),
    });

    return true;
}

export default completeTask;
