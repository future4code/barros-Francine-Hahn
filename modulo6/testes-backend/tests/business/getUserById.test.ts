import { UserBusiness } from "../../src/business/UserBusiness"
import { CustomError } from "../../src/errors/CustomError"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { UserMock } from "../mocks/UserMock"


describe("Testing the getUserById endpoint", () => {
    const userBusiness = new UserBusiness( new UserDatabaseMock() )
    
    test("Should receive an inexistent id and return the custom error", async () => {
        expect.assertions(3)
        try {
            await userBusiness.getUserById("54d6d-3fdd-87s888-1d6663")
        } catch (err: any) {
            expect(err).toBeInstanceOf(CustomError)
            expect(err.message).toBe("User id not found.")
            expect(err.statusCode).toBe(404)
        }
    })

    test("Should receive a valid id and return the user info", async () => {
        const result = await userBusiness.getUserById("id")
        expect(result).toEqual(UserMock)
    })
})