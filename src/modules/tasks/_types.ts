import { SortOrder } from "../../shared/types";

export type AddTaskData = {
    title: string;
    userId: string;
};

export type ListTasksData = {
    offset?: number;
    limit?: number;
    q?: string;
    sortBy?: "createdAt" | "updatedAt" | "title";
    order?: SortOrder;
    completed?: boolean;
    userId?: string;
    select?: string[];
};

export type ShowTaskData = {
    _id: string;
    userId?: string;
    select?: string[];
};

export type EditTaskData = Partial<Omit<AddTaskData, "userId">>;
