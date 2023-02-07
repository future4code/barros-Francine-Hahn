import { AuthenticationData } from "../models/AuthenticationData"
import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { Unauthorized } from "../error/userErrors"

dotenv.config()

export class Authenticator {
    public generateToken = ({id}: AuthenticationData): string => {
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: "24h"}
        )
    
        return token
    }
     
    getTokenData = (token: string): AuthenticationData => {
        try {
            const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
            return payload
        } catch (err: any) {
            throw new Unauthorized()
        }
        
    }
}
