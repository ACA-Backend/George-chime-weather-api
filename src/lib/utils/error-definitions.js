export class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statuscode = 404;
    }
}

export class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.statuscode = 400;
    }
}

export class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.statuscode = 401;
    }
}

export class ValidationError extends Error {
    constructor(message, errors) {
        super(message);
        this.errors = errors;
        this.statuscode = 422;
    }
}

export class ConflictError extends Error {
    constructor(message) {
        super(message);
        this.statuscode = 409;
    }
}

export class InternalServerError extends Error {
    constructor(message) {
        super(message);
        this.statuscode = 500;
    }
}