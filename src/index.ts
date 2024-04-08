import express from "express";
import config from "./shared/config";
import { connectDb } from "./db";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, TypeScript with Express!");
});

connectDb()
    .then(() => {
        console.log("Connected to DB");

        app.listen(config.port, () => {
            console.log(`Server is running on http://localhost:${config.port}`);
        });
    })
    .catch((err) => {
        console.log("Error connecting to DB: ", err);
    });
