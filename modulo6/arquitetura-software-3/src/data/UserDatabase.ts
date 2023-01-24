import { User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"
import { CustomError } from "../error/customError"


export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER"

  async create(newUser: User): Promise<void> {
    try {
      await BaseDatabase.connection
      .insert(newUser)
      .into(UserDatabase.TABLE_NAME)

    } catch (error: any) {
      throw new CustomError( error.statusCode, error.message)
    } 
  }


  async getAll(): Promise<User[]> {
    try {
      const result = await BaseDatabase.connection
      .select()
      .from(UserDatabase.TABLE_NAME)

      return result
      
    } catch (error: any) {
      throw new CustomError( error.statusCode, error.message)
    } 
  }
}
