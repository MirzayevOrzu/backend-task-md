import { FilterQuery } from "mongoose";
import { SortOrder } from "../../shared/types";
import { ListTasksData } from "./_types";
import Task, { ITask } from "../../models/Task";

async function listTasks({
    offset = 0,
    limit = 5,
    q,
    sortBy = "createdAt",
    order = SortOrder.DESC,
    select = [],
    ...filters
}: ListTasksData) {
    const query: FilterQuery<ITask> = { ...filters };

    if (q) {
        query.title = { $regex: q, $options: "i" };
    }

    const dbQuery = Task.find(query);

    const tasks = await dbQuery
        .clone()
        .sort({ [sortBy]: order })
        .skip(offset)
        .limit(limit)
        .populate(select)
        .lean();

    const total = await dbQuery.countDocuments();

    return {
        tasks,
        meta: {
            total,
            offset,
            limit,
        },
    };
}

export default listTasks;
