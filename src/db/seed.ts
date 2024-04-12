import { hashSync } from "bcryptjs";
import { connectDb, disconnectDb } from ".";
import User from "../models/User";
import { UserRole } from "../shared/types";

connectDb()
    .then(() => {
        return User.insertMany([
            {
                firstName: "John",
                lastName: "Doe",
                email: "johndoe@gmail.com",
                password: hashSync("123456"),
                role: UserRole.ADMIN,
            },
            {
                firstName: "Patric",
                lastName: "Smith",
                email: "patric@gmail.com",
                password: hashSync("123456"),
                role: UserRole.USER,
            },
        ]).then(() => {
            console.log("Seeded DB with data successfully");
        });
    })
    .finally(() => {
        return disconnectDb();
    });
