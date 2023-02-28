import { makePurchase } from "../src/functionsToBeTested/makePurchase"
import { User } from "../src/Model/User"


describe("Testing the function makePurchase", () => {
    test("Should receive a balance greater than the value and return the user info", () => {
        const user: User = {
            name: "Francine",
            balance: 5000
        }
    
        const result = makePurchase(user, 120)
        
        expect(result).toEqual({
            name: "Francine",
            balance: 4880
        })
    })

    test("Should receive a balance equal to the value and return the user info", () => {
        const user: User = {
            name: "Francine",
            balance: 5000
        }
    
        const result = makePurchase(user, 5000)
        
        expect(result).toEqual({
            name: "Francine",
            balance: 0
        })
    })

    test("Should receive a balance lower to the value and return undefined", () => {
        const user: User = {
            name: "Francine",
            balance: 100
        }
    
        const result = makePurchase(user, 500)
        
        expect(result).not.toBeDefined()
    })
})