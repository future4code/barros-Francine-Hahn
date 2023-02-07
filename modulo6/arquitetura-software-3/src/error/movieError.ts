import { CustomError } from "./customError"


export class MissingTitle extends CustomError {
    constructor () {
        super(422, "Você precisa informar o título do filme.")
    }
}

export class MissingDescription extends CustomError {
    constructor () {
        super(422, "Você precisa informar a descrição do filme.")
    }
}

export class MissingDuration extends CustomError {
    constructor () {
        super(422, "Você precisa informar a duração do filme em minutos.")
    }
}

export class InvalidDuration extends CustomError {
    constructor () {
        super(422, "A duração do filme deve ser maior do que zero.")
    }
}

export class MissingYearOfRelease extends CustomError {
    constructor () {
        super(422, "Você precisa informar o ano de lançamento do filme.")
    }
}

export class InvalidYearOfRelease extends CustomError {
    constructor () {
        super(422, "O ano de lançamento do filme deve estar no formato AAAA.")
    }
}