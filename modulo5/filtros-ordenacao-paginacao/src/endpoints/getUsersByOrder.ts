import { Request, Response } from "express"
import { connection } from "../data/connection"

//Exercicio 2
/* Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user.
A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email.*/

export async function selectAllUsers(orderby: string):Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio ORDER BY ${orderby} ASC;
    `)
 
    return result[0]
}

export const getUsersByOrder = async (req: Request, res: Response) => {
    let orderby = req.query.orderby as string
    let errorCode = 400
    
    try {
        if(orderby && orderby !== 'type' && orderby !== 'name') {
            errorCode = 404
            throw new Error("O tipo informado para ordenação não existe.")
        }
   
        if (!orderby) {
            orderby = 'email'
        }

        const users = await selectAllUsers(orderby)

        res.status(200).send(users)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}