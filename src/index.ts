import express from "express";
import config from "./shared/config";
import { connectDb } from "./db";
import router from "./api";
import { handleErrors } from "./shared/errors";
import { isLoggedIn } from "./shared/middlewares";

const app = express();

app.use(express.json());

app.get("/", isLoggedIn, (req, res) => {
    res.send("Hello, TypeScript with Express!");
});

app.use(router);

app.use(handleErrors);

connectDb()
    .then(() => {
        app.listen(config.port, () => {
            console.log(`Server is running on http://localhost:${config.port}`);
        });
    })
    .catch((err) => {
        console.log("Error connecting to DB: ", err);
    });
