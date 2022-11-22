import { Request, Response } from "express"
import { connection } from "../data/connection"

//Exercício 3
/* Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, e permita que o usuário possa passar
a página que deseja ver. O número da página deve ser passado por query params.*/

export async function selectFiveUsers(offset: number):Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio LIMIT 5 OFFSET ${offset};
    `)
    
    return result[0]
}
 

export const getUsersByPage = async(req: Request, res: Response): Promise<void> => {
    const page = Number(req.query.page)
    let errorCode = 400
    let offset

    try {
        if(!page) {
            offset = 0
        } else {
            offset = 5 * (page -1)
        }
        
        const users = await selectFiveUsers(offset)
        if(users.length === 0) {
            errorCode = 404
            throw new Error("Não há usuários nessa página.")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
  }