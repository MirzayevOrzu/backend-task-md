import Task from "../../models/Task";
import { NotFoundError } from "../../shared/errors";

async function removeTask(filter: { _id: string; userId?: string }) {
    const task = await Task.findOne(filter);

    if (!task) {
        throw new NotFoundError("Task is not found");
    }

    await Task.findOneAndDelete(filter);

    return true;
}

export default removeTask;
