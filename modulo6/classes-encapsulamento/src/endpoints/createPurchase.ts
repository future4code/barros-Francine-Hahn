import { Request, Response } from "express"
import connection from "../database/connection"
import Purchase from "../class/Purchase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const findUser = await connection("Labe_Users")
        .select()
        .where("id", userId)

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const findProduct = await connection("Labe_Products")
        .select()
        .where("id", productId)

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
        const product = {
            id: findProduct[0].id,
            name: findProduct[0].name,
            price: findProduct[0].price
        }

        const totalPrice = Number(product.price) * Number(quantity)
        const id = Date.now().toString()
        const newPurchase = new Purchase(id, userId, productId, quantity, totalPrice)
        
        await connection("Labe_Purchases").insert(newPurchase)
        
        res.status(201).send({ message: "Compra registrada", purchase: newPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}