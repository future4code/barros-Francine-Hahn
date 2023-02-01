import { UserDatabase } from "../data/UserDatabase"
import { userInputDTO } from "../models/userInputDTO"
import { Authenticator } from "../services/Authenticator"
import { generateId } from "../services/generateId"
import { user } from "../models/user"
import { CustomError } from "../error/CustomError"
import { loginInputDTO } from "../models/loginInputDTO"
import { IncorrectPassword, InvalidEmail, InvalidPassword, MissingAuthorization, MissingEmail, MissingName, MissingPassword, UserNotFound } from "../error/userErrors"
import { returnUserInfoDTO } from "../models/returnUserInfoDTO"


export class UserBusiness {
    async getAll(): Promise<user[]> {
        try {
          const userDatabase = new UserDatabase()
          return await userDatabase.getAll()
    
        } catch (error: any) {
          throw new CustomError( error.statusCode, error.message)
        }
    }


    async signup (input: userInputDTO): Promise<string> {
        try {
            if (!input.name) {
                throw new MissingName()
            }
            if (!input.email) {
                throw new MissingEmail()
            }
            if (!input.password) {
                throw new MissingPassword()
            }
            if (input.password.length < 6) {
                throw new InvalidPassword()
            }
            if (!input.email.includes("@")) {
                throw new InvalidEmail()
            }

            const id: string = generateId()
            
            const user: user = {
                id,
                name: input.name,
                email: input.email,
                password: input.password
            }

            const userDatabase = new UserDatabase()
            await userDatabase.signup(user)

            const authenticator = new Authenticator()
            const token = await authenticator.generateToken({id})

            return token

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }


    async login (input: loginInputDTO): Promise<string> {
        try {
            if (!input.email) {
                throw new MissingEmail()
            }
            if (!input.password) {
                throw new MissingPassword()
            }
            if (input.password.length < 6) {
                throw new InvalidPassword()
            }
            if (!input.email.includes("@")) {
                throw new InvalidEmail()
            }

            const userDatabase = new UserDatabase()
            const userExists = await userDatabase.findUserByEmail(input.email)
            
            if (userExists.length === 0) {
                throw new UserNotFound()
            }
            if (input.password !== userExists[0].password) {
                throw new IncorrectPassword()
            }

            const authenticator = new Authenticator()
            const token = await authenticator.generateToken({id: userExists[0].id})

            return token

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }


    async userInfo (authorization: string): Promise<returnUserInfoDTO> {
        try {
            if (!authorization) {
                throw new MissingAuthorization()
            }

            const userDatabase = new UserDatabase()
            const authenticator = new Authenticator()

            const user = await userDatabase.getUserById(authenticator.getTokenData(authorization).id)

            const result: returnUserInfoDTO = {
                id: user.id,
                email: user.email
            }

            return result

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}