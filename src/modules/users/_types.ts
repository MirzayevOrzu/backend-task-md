import { SortOrder, UserRole } from "../../shared/types";

export type AddUserData = {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    role: UserRole;
    password: string;
};

export type ListUsersData = {
    offset?: number;
    limit?: number;
    q?: string;
    sortBy?: "createdAt" | "updatedAt" | "firstName" | "lastName";
    order?: SortOrder;
    role?: UserRole;
};

export type ShowUserData = {
    id: string;
};

export type EditUserData = Partial<Omit<AddUserData, "password">>;
