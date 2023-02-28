import { Response, Request } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { inputLoginDTO } from "../Model/User"

const userBusiness = new UserBusiness()

export class UserController {
    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: inputLoginDTO = {
                email: req.body.email,
                password: req.body.password
            }
      
            const token = await userBusiness.login(input)
            res.status(201).send({token})
    
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}