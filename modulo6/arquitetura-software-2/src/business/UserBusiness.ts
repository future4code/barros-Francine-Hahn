import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { User } from "../types/User"


export class UserBusiness {
  async create({ email, name, password }: any):Promise<void> {
    try {
      if (!email || !name || !password) {
        throw new Error("Dados inválidos (email, name, password)")
      }
  
      const id = generateId()
  
      const userDatabase = new UserDatabase()
      await userDatabase.create({id, name, email, password})
    
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getAll():Promise<User[]> {
    try {
      const userDatabase = new UserDatabase()
      return await userDatabase.getAll()
    } catch (error: any) {
      throw new Error(error.message)
    }
    
  }
}
