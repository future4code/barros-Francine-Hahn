import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { UserMock } from "../mocks/UserMock"

describe("Testing the getAllUsers endpoint", () => {
    const userBusiness = new UserBusiness( new UserDatabaseMock() )
    
    test("Should receive a normal user and return the unauthorized error", async () => {
        expect.assertions(2)
        try {
            await userBusiness.getAllUsers("NORMAL")
        } catch (err: any) {
            expect(err.statusCode).toBe(401)
            expect(err.message).toBe("This user cannot access this information.")
        }
    })

    test("Should receive a valid user role and return the list of users", async () => {
        const result = await userBusiness.getAllUsers("ADMIN")
            
        expect(result.length).toBe(2)
        expect(result).toContain(UserMock)
    })
})