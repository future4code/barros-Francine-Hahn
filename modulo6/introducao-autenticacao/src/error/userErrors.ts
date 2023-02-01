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

export class MissingAuthorization extends CustomError {
    constructor () {
        super(422, "Você precisa informar o token.")
    }
}

export class UserNotFound extends CustomError {
    constructor () {
        super(404, "Usuário não encontrado.")
    }
}

export class InvalidEmail extends CustomError {
    constructor () {
        super(422, "E-mail no formato inválido.")
    }
}

export class InvalidPassword extends CustomError {
    constructor () {
        super(422, "A senha deve conter pelo menos 6 caracteres.")
    }
}

export class IncorrectPassword extends CustomError {
    constructor () {
        super(422, "Senha incorreta.")
    }
}

export class Unauthorized extends CustomError {
    constructor () {
        super(401, "Usuário não autorizado.")
    }
}