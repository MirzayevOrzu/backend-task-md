import { ForbiddenError } from "../errors";
import { Controller, UserRole } from "../types";

export function hasRole(roles: UserRole[]): Controller {
    return (req, res, next) => {
        if (!roles.includes(req.user!.role)) {
            return next(
                new ForbiddenError("You have no access for this action")
            );
        }

        next();
    };
}
