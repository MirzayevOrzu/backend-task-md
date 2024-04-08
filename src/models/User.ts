import { Schema, model } from "mongoose";
import { UserRole } from "../shared/types";

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: string;
    updatedAt: string;
}

const userSchema = new Schema<IUser>(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: [UserRole.ADMIN, UserRole.USER],
            default: UserRole.USER,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const User = model("User", userSchema);

export default User;
