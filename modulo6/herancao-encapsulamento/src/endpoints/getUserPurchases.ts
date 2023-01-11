import { Request, Response } from "express"
import PurchaseDatabase from "../database/PurchaseDatabase"
import UserDatabase from "../database/UserDatabase"


export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    
    try {
        const id = req.params.id

        if (id === ':id') {
            errorCode = 422
            throw new Error("É obrigatório passar o id do usuário.")
        }

        const user = new UserDatabase()
        const userExists = await user.getUserById(id)

        if (userExists.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.");
        }

        const purchases = new PurchaseDatabase()
        const result = await purchases.getUserPurchases(id)
        
        res.status(200).send({ purchases: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}