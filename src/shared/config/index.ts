import dotenv from "dotenv";

dotenv.config();

interface IConfig {
    port: number;
    db: {
        host: string;
        port: number;
        name: string;
        // TODO it is best practice to enable authentication
        // user: string;
        // pwd: string;
    };
    jwt: {
        secret: string;
    };
}

const config: IConfig = {
    port: +process.env.PORT! || 3000,
    db: {
        host: process.env.DB_HOST || "localhost",
        port: +process.env.DB_PORT! || 27017,
        name: process.env.DB_NAME || "task-orzu",
    },
    jwt: {
        secret: process.env.JWT_SECRET! || "hey",
    },
};

export default config;
