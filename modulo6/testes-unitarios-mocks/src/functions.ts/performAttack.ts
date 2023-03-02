import { character } from "../model/character"


export const performAttack = (attacker: character, defender: character, validator: (input: character) => boolean) => {
    try {
        const validateAttacker = validator(attacker)
        const validateDefender = validator(defender)
        
        if (!validateAttacker || !validateDefender) {
            throw new Error("Invalid character.")
        }

        const attack = attacker.strength - defender.defense

        if (attack > 0) {
            defender.life -= attack;
        }

    } catch (error: any) {
        throw new Error(error.message)
    }
}


/* Essa função abaixo chama a função validateCharacter diretamente, o que impede que façamos um teste unitário nela. Dessa forma, o ideal é
colocarmos uma função validator como parâmetro da função performAttack para que quando formos testá-la, possamos passar um mock no lugar da
função validateCharacter. Assim, caso haja algum erro no teste da função performAttack, saberemos que não foi relacionado a função
validateCharacter.*/

/*export const performAttack = (attacker: Character, defender: Character) => {
    try {
        if (!validateCharacter(attacker) || !validateCharacter(defender)) {
            throw new Error("Invalid character.")
        }

        const attack = attacker.strength - defender.defense

        if (attack > 0) {
            defender.life -= attack;
        }

    } catch (error: any) {
        throw new Error(error.message)
    }
}*/