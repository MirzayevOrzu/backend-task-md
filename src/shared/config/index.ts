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
    port: +process.env.PORT!,
    db: {
        host: process.env.DB_HOST!,
        port: +process.env.DB_PORT!,
        name: `${process.env.DB_NAME}`,
    },
    jwt: {
        secret: `${process.env.JWT_SECRET}`,
    },
};

export default config;
