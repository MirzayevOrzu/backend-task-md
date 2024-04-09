import { CurrentUser } from "./current-user";

declare global {
    namespace Express {
        export interface Request {
            user?: CurrentUser;
        }
    }
}

export {};
