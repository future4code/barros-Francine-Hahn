import { login } from "../src/functionsToBeTested/login"

describe("Testing the login endpoint", () => {

    test("Should receive an email and a password and return a success message", async () => {
        const newLogin = {
            email: "franhahn@gmail.com",
            password: "123456"
        }

        const result = await login(newLogin)
        expect(result).toBeDefined()
    })

    test("Should receive an incorrect email and a password and return an error message", async () => {
        const newLogin = {
            email: "fran_hahn@hotmail.com",
            password: "123456"
        }

        try {
            await login(newLogin)
        } catch (err: any) {
            expect(err.message).toBe("Email not found.")
        }
    })

    test("Should receive a correct email and an incorrect password and return an error message", async () => {
        const newLogin = {
            email: "franhahn@gmail.com",
            password: "123456789"
        }

        try {
            await login(newLogin)
        } catch (err: any) {
            expect(err.message).toBe("Incorrect password.")
        }
    })
})