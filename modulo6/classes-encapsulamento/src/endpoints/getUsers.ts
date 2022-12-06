import { Request, Response } from "express"
import UserDatabase from "../class/UserDatabase"
import connection from "../database/connection"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const users = new UserDatabase(connection)
        const result = await users.getUsers()
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}