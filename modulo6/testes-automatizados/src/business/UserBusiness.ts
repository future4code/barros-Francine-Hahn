import { UserDatabase } from "../data/UserDatabase"
import { inputLoginDTO } from "../Model/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"

const userDatabase = new UserDatabase()
const authenticator = new Authenticator()
const hashManager = new HashManager()

export class UserBusiness {
    login = async (input: inputLoginDTO): Promise<string> => {
        try {
            if (!input.email) {
                throw new Error("Provide the email.")
            }
            if (!input.password) {
                throw new Error("Provide the password.")
            }
    
            const emailExists = await userDatabase.getUserBy("email", input.email)
            
            if (!emailExists) {
                throw new Error("Email not found.")
            }
        
            const comparePassword = await hashManager.compareHash(input.password, emailExists.password)

            if (!comparePassword) {
                throw new Error("Incorrect password.")
            }
            
            const token = await authenticator.generateToken({id: emailExists.id})
            return token
    
        } catch (err: any) {
            throw new Error(err.message)
        }
    }
}