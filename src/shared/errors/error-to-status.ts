import {
    BadRequestError,
    ConflictError,
    ForbiddenError,
    InvalidPropertyError,
    NotFoundError,
    UnauthorizedError,
} from "./classes";

export const mapErrorToStatus = (err: any) => {
    let status = 500;

    if (
        err instanceof InvalidPropertyError ||
        err instanceof ConflictError ||
        err instanceof BadRequestError
    )
        status = 400;
    else if (err instanceof UnauthorizedError) status = 401;
    else if (err instanceof ForbiddenError) status = 403;
    else if (err instanceof NotFoundError) status = 404;

    return status;
};
