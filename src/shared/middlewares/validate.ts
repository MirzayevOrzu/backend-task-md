import Joi from "joi";
import { Controller } from "../types/controller";
import { InvalidPropertyError } from "../errors/classes";

export function validate({
    body,
    params,
    query,
}: {
    body?: Joi.Schema;
    params?: Joi.Schema;
    query?: Joi.Schema;
}): Controller {
    return async (req, res, next) => {
        try {
            if (body) {
                req.body = await body.validateAsync(req.body);
            }

            if (params) {
                req.params = await params.validateAsync(req.params);
            }

            if (query) {
                req.query = await query.validateAsync(req.query);
            }

            next();
        } catch (error) {
            const message = (error as Joi.ValidationError).details[0].message;

            next(new InvalidPropertyError(message));
        }
    };
}
