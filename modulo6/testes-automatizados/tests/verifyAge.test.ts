import { verifyAge } from "../src/functionsToBeTested/verifyAge"
import { Casino, country, nationality, UserCasino } from "../src/Model/Casino"

describe("Testing the function verifyAge", () => {
    test("Should receive a casino in Brazil and a user over 17", () => {
        const user: UserCasino = {
            name: "Francine",
            age: 19,
            nationality: nationality.BRAZILIAN
        }

        const casino: Casino = {
            name: "Casino Sul",
            country: country.BRAZIL
        }

        const result = verifyAge(casino, [user])

        expect(result).toEqual({
            brazilians: {
                allowed: ["Francine"],
                unallowed: []
            },
            americans: {
                allowed: [],
                unallowed: []
            }
        })

        expect(result.brazilians.allowed.length).toBeLessThan(2)
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    })

    test("Should receive a casino in Brazil and an american user over 17", () => {
        const user: UserCasino = {
            name: "Francine",
            age: 19,
            nationality: nationality.AMERICAN
        }

        const casino: Casino = {
            name: "Casino Sul",
            country: country.BRAZIL
        }

        const result = verifyAge(casino, [user])

        expect(result).toEqual({
            brazilians: {
                allowed: [],
                unallowed: []
            },
            americans: {
                allowed: ["Francine"],
                unallowed: []
            }
        })   
        
        expect(result.americans.unallowed.length).toBe(0)
    })

    test("Should receive a casino in the USA and 2 americans and 2 brazilians all 19", () => {
        const users: UserCasino[] = [
            {
                name: "Francine",
                age: 19,
                nationality: nationality.BRAZILIAN
            },
            {
                name: "Laura",
                age: 19,
                nationality: nationality.BRAZILIAN
            },
            {
                name: "John",
                age: 19,
                nationality: nationality.AMERICAN
            },
            {
                name: "Rachel",
                age: 19,
                nationality: nationality.AMERICAN
            },
        ]

        const casino: Casino = {
            name: "South Casino",
            country: country.USA
        }

        const result = verifyAge(casino, users)

        expect(result).toEqual({
            brazilians: {
                allowed: [],
                unallowed: ["Francine", "Laura"]
            },
            americans: {
                allowed: [],
                unallowed: ["John", "Rachel"]
            }
        })

        expect(result.brazilians.unallowed).toContain("Laura")
        expect(result.americans.unallowed).toContain("John")
    })

    test("Should receive a casino in the USA and 2 brazilians who are 19 years old and 2 americans who are 21 years old", () => {
        const users: UserCasino[] = [
            {
                name: "Francine",
                age: 19,
                nationality: nationality.BRAZILIAN
            },
            {
                name: "Laura",
                age: 19,
                nationality: nationality.BRAZILIAN
            },
            {
                name: "John",
                age: 21,
                nationality: nationality.AMERICAN
            },
            {
                name: "Rachel",
                age: 21,
                nationality: nationality.AMERICAN
            },
        ]

        const casino: Casino = {
            name: "South Casino",
            country: country.USA
        }

        const result = verifyAge(casino, users)

        expect(result).toEqual({
            brazilians: {
                allowed: [],
                unallowed: ["Francine", "Laura"]
            },
            americans: {
                allowed: ["John", "Rachel"],
                unallowed: []
            }
        })

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)
    })
})