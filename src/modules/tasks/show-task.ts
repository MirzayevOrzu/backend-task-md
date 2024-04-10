import Task from "../../models/Task";
import { NotFoundError } from "../../shared/errors";
import { ShowTaskData } from "./_types";

async function showTask({ select = [], ...filter }: ShowTaskData) {
    const task = await Task.findOne(filter).populate(select).lean();

    if (!task) {
        throw new NotFoundError("Task is not found");
    }

    return task;
}

export default showTask;
