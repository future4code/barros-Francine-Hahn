import { outputUserById } from "../../src/model/User"
import { UserRepository } from "../../src/model/UserRepository"
import { UserMock } from "./UserMock"


export class UserDatabaseMock implements UserRepository {
    TABLE = "User_Arq"

    getUserById = async (id: string): Promise<outputUserById | undefined> => {
        return id === "id"? UserMock : undefined
    }

    getAllUsers = async (): Promise<outputUserById[]> => {
        return [UserMock, UserMock]
    }
}