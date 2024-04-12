import mongoose from "mongoose";
import config from "../shared/config";

export function connectDb() {
    return mongoose
        .connect(
            `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
        )
        .then(() => {
            console.log("Connected to DB");
            return;
        });
}

export function disconnectDb() {
    return mongoose.disconnect().then(() => {
        console.log("Disconnected from DB");
    });
}
