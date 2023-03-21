// Devemos criar um mock da função validateCharacter, pois a função performAttack depende dela para funcionar corretamente.
// Então, para conseguirmos testar a função performAttack isoladamente, precisamos de um mock da função validateCharacter.

import { performAttack } from "../src/functions.ts/performAttack"
import { character } from "../src/model/character"

/*Mock de saída de sucesso
const validatorMock = jest.fn(() => {
    return true
})*/

/*Mock de saída de erro
const validatorMock = jest.fn(() => {
    return false
})*/

describe("Testing the performAttck function", () => {
    test("Should receive 2 valid characters", () => {
        const attacker: character = {
            name: "Picachu",
            life: 1000,
            defense: 500,
            strength: 1000
        }

        const defender: character = {
            name: "Bulbasaur",
            life: 1000,
            defense: 800,
            strength: 1000
        }

        const validatorMock = jest.fn(() => {
            return true
        })

        performAttack(attacker, defender, validatorMock)

        expect(defender.life).toBe(800)
        expect(validatorMock).toBeCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Should receive 1 valid character and 1 invalid character", () => {
        const attacker: character = {
            name: "Picachu",
            life: -1000,
            defense: 500,
            strength: 1000
        }

        const defender: character = {
            name: "Bulbasaur",
            life: 1000,
            defense: 800,
            strength: 1000
        }

        const validatorMock = jest.fn(() => {
            return false
        })

        try {
            performAttack(attacker, defender, validatorMock)
        } catch (err: any) {
            expect(err.message).toBe("Invalid character.")
            expect(validatorMock).toBeCalled()
            expect(validatorMock).toHaveBeenCalledTimes(2)
            expect(validatorMock).toHaveReturnedTimes(2)
        }
    })

    test("Should receive 2 invalid characters", () => {
        const attacker: character = {
            name: "Picachu",
            life: -1000,
            defense: 500,
            strength: 1000
        }

        const defender: character = {
            name: "Bulbasaur",
            life: 1000,
            defense: -800,
            strength: 1000
        }

        const validatorMock = jest.fn(() => {
            return false
        })

        try {
            performAttack(attacker, defender, validatorMock)
        } catch (err: any) {
            expect(err.message).toBe("Invalid character.")
            expect(validatorMock).toBeCalled()
            expect(validatorMock).toHaveBeenCalledTimes(2)
            expect(validatorMock).toHaveReturnedTimes(2)
        }
    })
})