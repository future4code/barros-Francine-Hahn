import { User } from "../types/User"
import { BaseDatabase } from "./BaseDatabase"


export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER"

  async create({ id, name, email, password }: any): Promise<void> {
    try {
      await BaseDatabase.connection
      .insert({id, name, email, password})
      .into(UserDatabase.TABLE_NAME)
    } catch (error: any) {
      throw new Error(error.message)
    } 
  }

  async getAll(): Promise<User[]> {
    try {
      const result = await BaseDatabase.connection
      .select()
      .from(UserDatabase.TABLE_NAME)

      return result
    } catch (error: any) {
      throw new Error(error.message)
    } 
  }
}
