import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { CustomError } from "../errors/CustomError"


export class UserController {
    constructor (private userBusiness: UserBusiness) {}

    getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id
            const result = await this.userBusiness.getUserById(id)
            res.status(200).send(result)

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }


    getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const role = req.headers.role as string
            const result = await this.userBusiness.getAllUsers(role)
            res.status(200).send(result)

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}