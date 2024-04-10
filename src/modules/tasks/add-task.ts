import User from "../../models/User";
import Task from "../../models/Task";
import { NotFoundError } from "../../shared/errors";
import { AddTaskData } from "./_types";

async function addTask(data: AddTaskData) {
    console.log({ data });
    const { userId } = data;

    const user = await User.findById(userId);

    if (!user) {
        throw new NotFoundError("User is not found");
    }

    await Task.create(data);

    return true;
}

export default addTask;
