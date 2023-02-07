import { CustomError } from "../error/CustomError"
import { user } from "../models/user"
import { BaseDatabase } from "./BaseDatabase"


export class UserDatabase extends BaseDatabase {
    TABLE_NAME = "LABEFLIX_USER"
    
    async getAll(): Promise<user[]> {
        try {
          const result = await BaseDatabase.connection
          .select()
          .from(this.TABLE_NAME)
    
          return result
    
        } catch (err: any) {
          throw new CustomError( err.statusCode, err.message)
        } 
    }
    
    
    async signup (user: user): Promise<void> {
        try {
            await BaseDatabase.connection(this.TABLE_NAME).insert(user)
        } catch (err: any) {
            throw new CustomError( err.statusCode, err.message)
        }
    }


    async findUserByEmail (email: string): Promise<any> {
        try {
            return await BaseDatabase.connection(this.TABLE_NAME).select().where({email})
        } catch (err: any) {
            throw new CustomError( err.statusCode, err.message)
        }
    }


    async getUserById (id: string): Promise<any> {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME).select().where({id})
            return result[0]
        } catch (err: any) {
            throw new CustomError( err.statusCode, err.message)
        }
    }
}