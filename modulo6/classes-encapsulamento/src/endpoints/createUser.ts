import { Request, Response } from "express"
import connection from "../database/connection"
import User from "../class/User"
import UserDatabase from "../class/UserDatabase"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        const id = Date.now().toString()
        const newUser = new User(id, email, password)
        const userDB = new UserDatabase(connection)
        userDB.insertUser(newUser)
        
        res.status(201).send({ message: "Usuário criado", user: newUser })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}