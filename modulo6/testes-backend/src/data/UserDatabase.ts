import { CustomError } from "../errors/CustomError"
import { outputUserById, User } from "../model/User"
import { UserRepository } from "../model/UserRepository"
import { BaseDatabase } from "./BaseDatabase"


export class UserDatabase extends BaseDatabase implements UserRepository {
    TABLE = "User_Arq"

    getUserById = async (id: string): Promise<outputUserById | undefined> => {
        try {
            const result = await BaseDatabase.connection(this.TABLE).select("id", "name", "email", "role").where({id})
            return result[0]
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }


    getAllUsers = async (): Promise<outputUserById[]> => {
        try {
            return await BaseDatabase.connection(this.TABLE).select("id", "name", "email", "role")
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}