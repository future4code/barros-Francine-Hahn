import { CustomError } from "../errors/CustomError"
import { MissingRole, MissingUserId, Unauthorized, UserIdNotFound } from "../errors/userErrors"
import { outputUserById, userRoles } from "../model/User"
import { UserRepository } from "../model/UserRepository"


export class UserBusiness {
    constructor (private userDatabase: UserRepository) {}

    getUserById = async (id: string): Promise<outputUserById> => {
        try {
            if (id === ":id") {
                throw new MissingUserId()
            }

            const result = await this.userDatabase.getUserById(id)
    
            if (!result) {
                throw new UserIdNotFound()
            }

            return result

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }


    getAllUsers = async (role: string): Promise<outputUserById[]> => {
        try {
            if (!role) {
                throw new MissingRole()
            }
            if (role.toUpperCase() !== userRoles.ADMIN) {
                throw new Unauthorized()
            }

            const result = await this.userDatabase.getAllUsers()
            return result

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}