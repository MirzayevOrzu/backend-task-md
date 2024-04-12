import { Schema, SchemaTypes, model } from "mongoose";

export interface ITask {
    _id: string;
    title: string;
    userId: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
    whenCompleted: Date;
}

const taskSchema = new Schema<ITask>(
    {
        title: {
            type: String,
            required: true,
        },
        userId: {
            type: SchemaTypes.ObjectId as unknown as any,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        whenCompleted: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

taskSchema.virtual("user", {
    localField: "userId",
    foreignField: "_id",
    ref: "User",
    justOne: true,
});

const Task = model("Task", taskSchema);

export default Task;
