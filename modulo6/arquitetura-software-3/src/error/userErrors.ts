import { CustomError } from "./CustomError"

export class MissingName extends CustomError {
    constructor () {
        super(422, "Você precisa informar o nome do usuário.")
    }
}

export class MissingEmail extends CustomError {
    constructor () {
        super(422, "Você precisa informar o e-mail do usuário.")
    }
}

export class MissingPassword extends CustomError {
    constructor () {
        super(422, "Você precisa informar a senha do usuário.")
    }
}