import { UserRole } from "./user-role";

export type CurrentUser = {
    id: string;
    role: UserRole;
};
