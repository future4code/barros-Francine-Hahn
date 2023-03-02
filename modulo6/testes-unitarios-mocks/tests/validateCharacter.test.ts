import { validateCharacter } from "../src/functions.ts/validateCharacter"
import { character } from "../src/model/character"

describe("Testing the function validadeCharacter", () => {
    test("Should receive a character with the property name empty and return false", () => {
        const character: character = {
            name: "",
            life: 20,
            defense: 100,
            strength: 50
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Should receive a character with the property life zero and return false", () => {
        const character: character = {
            name: "Picachu",
            life: 0,
            defense: 100,
            strength: 50
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Should receive a character with the property strength zero and return false", () => {
        const character: character = {
            name: "Picachu",
            life: 20,
            defense: 100,
            strength: 0
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Should receive a character with the property defense being negative and return false", () => {
        const character: character = {
            name: "Picachu",
            life: 500,
            defense: -100,
            strength: 500
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Should receive a character with all the info being valid and return true", () => {
        const character: character = {
            name: "Picachu",
            life: 20,
            defense: 100,
            strength: 500
        }

        const result = validateCharacter(character)

        expect(result).toBe(true)
    })
})