import User from "../../models/User";

async function countTasksByUser() {
    return User.aggregate([
        {
            $lookup: {
                from: "tasks",
                localField: "_id",
                foreignField: "userId",
                as: "tasks",
            },
        },
        {
            $group: {
                _id: "$_id",
                firstName: {
                    $first: "$firstName",
                },
                lastName: {
                    $first: "$lastName",
                },
                taskCount: {
                    $sum: {
                        $size: "$tasks",
                    },
                },
            },
        },
    ]);
}

export default countTasksByUser;
