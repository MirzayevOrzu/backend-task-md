import Task from "../../models/Task";
import { NotFoundError } from "../../shared/errors";
import { EditTaskData } from "./_types";

async function editTask(
    filter: { _id: string; userId?: string },
    data: EditTaskData
) {
    const task = await Task.findOne(filter);

    if (!task) {
        throw new NotFoundError("Task is not found");
    }

    await Task.findOneAndUpdate(filter, data);

    return true;
}

export default editTask;
