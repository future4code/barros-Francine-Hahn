import dotenv from "dotenv"
import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../Model/AuthenticationData"

dotenv.config()

export class Authenticator {
    public generateToken = ({id}: AuthenticationData): string => {
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: "1h"}
        )

        return token
    }

    public getTokenData = (token: string): AuthenticationData => {
        try {
            const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
            return payload
        } catch (err: any) {
            throw new Error("Unauthorized user.")
        }
    }
}