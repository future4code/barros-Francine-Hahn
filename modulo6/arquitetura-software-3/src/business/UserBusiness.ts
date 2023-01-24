import { UserDatabase } from "../data/UserDatabase"
import { MissingEmail, MissingName, MissingPassword } from "../error/userErrors"
import { createUserDTO } from "../models/CreateUserDTO"
import { User } from "../models/User"
import { idGenerator } from "../services/idGenerator"
import { CustomError } from "../error/customError"


export class UserBusiness {
  async create (input: createUserDTO):Promise<void> {
    try {
      if (!input.email) {
        throw new MissingEmail()
      }

      if (!input.name) {
        throw new MissingName()
      }

      if (!input.password) {
        throw new MissingPassword()
      }
  
      const userDatabase = new UserDatabase()
      
      const newUser = new User(
        idGenerator(),
        input.name,
        input.email,
        input.password
      )
      
      await userDatabase.create(newUser)
    
    } catch (error: any) {
      throw new CustomError( error.statusCode, error.message)
    }
  }

  
  async getAll(): Promise<User[]> {
    try {
      const userDatabase = new UserDatabase()
      return await userDatabase.getAll()

    } catch (error: any) {
      throw new CustomError( error.statusCode, error.message)
    }
  }
}
