import { Request, Response } from "express"
import connection from "../database/connection"
import ProductDatabase from "../class/ProductDatabase"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const products = new ProductDatabase(connection)
        const result = await products.getPoducts()

        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}