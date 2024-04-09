import { FilterQuery } from "mongoose";
import User, { IUser } from "../../models/User";
import { ListUsersData } from "./_types";
import { SortOrder } from "../../shared/types";

async function listUsers({
    offset = 0,
    limit = 10,
    q,
    sortBy = "createdAt",
    order = SortOrder.DESC,
    ...filters
}: ListUsersData) {
    const query: FilterQuery<IUser> = { ...filters };

    if (q) {
        query.$or = [
            { firstName: { $regex: q, $options: "i" } },
            { lastName: { $regex: q, $options: "i" } },
        ];
    }

    const dbQuery = User.find(query);

    const users = await dbQuery
        .clone()
        .sort({ [sortBy]: order })
        .skip(offset)
        .limit(limit)
        .lean();

    const total = await dbQuery.countDocuments();

    return {
        users,
        meta: {
            total,
            offset,
            limit,
        },
    };
}

export default listUsers;
