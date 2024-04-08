import { NextFunction, Request, Response } from "express";
import { mapErrorToStatus } from "./error-to-status";

export * from "./classes";

export const handleErrors = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = mapErrorToStatus(err);

    res.status(status).json({
        error: err.message,
    });
};
