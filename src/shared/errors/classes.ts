export class InvalidPropertyError extends Error {
    constructor(msg: string) {
        super(msg);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidPropertyError);
        }
    }
}

export class ConflictError extends Error {
    constructor(msg: string) {
        super(msg);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ConflictError);
        }
    }
}

export class UnauthorizedError extends Error {
    constructor(msg: string) {
        super(msg);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UnauthorizedError);
        }
    }
}

export class NotFoundError extends Error {
    constructor(msg: string) {
        super(msg);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotFoundError);
        }
    }
}

export class ForbiddenError extends Error {
    constructor(msg: string) {
        super(msg);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ForbiddenError);
        }
    }
}

export class BadRequestError extends Error {
    constructor(msg: string) {
        super(msg);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, BadRequestError);
        }
    }
}
