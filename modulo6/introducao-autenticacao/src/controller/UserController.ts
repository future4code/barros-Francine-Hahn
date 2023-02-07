import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { loginInputDTO } from "../models/loginInputDTO"
import { userInputDTO } from "../models/userInputDTO"


export class UserController {
    async getAll (req: Request, res: Response): Promise<void> {
        try {
          const userBusiness = new UserBusiness()
          const result = await userBusiness.getAll()
    
          res.status(200).send(result)
    
        } catch (error: any) {
          res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }


    async signup (req: Request, res: Response): Promise<void> {
        try {
            const input: userInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const token = await userBusiness.signup(input)

            res.status(201).send({message: "Success!", token})

        } catch (err: any) {
            res.status(400).send(err.message)
        }
    }


    async login (req: Request, res: Response): Promise<void> {
        try {
            const input: loginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const token = await userBusiness.login(input)

            res.status(200).send({token})

        } catch (err: any) {
            res.status(400).send(err.message)
        }
    }


    async userInfo (req: Request, res: Response): Promise<void> {
        try {
            const authorization: string = req.headers.authorization as string

            const userBusiness = new UserBusiness()
            const result = await userBusiness.userInfo(authorization)

            res.status(200).send(result)

        } catch (err: any) {
            res.status(400).send(err.message)
        }
    }
}