import { CustomError } from "./CustomError"


export class MissingUserId extends CustomError {
    constructor () {
        super(422, "Provide the user id.")
    }
}

export class UserIdNotFound extends CustomError {
    constructor () {
        super(404, "User id not found.")
    }
}

export class MissingRole extends CustomError {
    constructor () {
        super(422, "Provide the user role.")
    }
}

export class Unauthorized extends CustomError {
    constructor () {
        super(401, "This user cannot access this information.")
    }
}