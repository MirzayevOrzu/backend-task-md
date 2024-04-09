import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UnauthorizedError } from "../errors";
import config from "../config";

export function isLoggedIn(req: Request, res: Response, next: NextFunction) {
    try {
        if (!req.headers.authorization) {
            next(new UnauthorizedError("Not authenticated"));
            return;
        }

        const decoded = jwt.verify(
            req.headers.authorization,
            config.jwt.secret,
            {
                ignoreExpiration: false,
            }
        );

        req.user = (decoded as JwtPayload)["user"];

        next();
    } catch (error) {
        next(new UnauthorizedError("Not authenticated"));
    }
}
