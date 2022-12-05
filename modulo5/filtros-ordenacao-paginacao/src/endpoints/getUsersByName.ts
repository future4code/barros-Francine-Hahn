import { Request, Response } from "express"
import { connection } from "../data/connection"

//Exercício 1
/* a) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por nome.
Este nome deve ser enviado por query params.*/

export async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio;
    `)
 
    return result[0]
 }
 
 export async function filterUsers(name: string):Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio WHERE name LIKE '%${name}%';
    `)
    
    return result[0]
 }
 
 
 export const getUsersByName = async(req: Request, res: Response): Promise<void> => {
    const name = req.query.name as string
    let errorCode = 400
    let users
    
    try {
 
       if (!name) {
          users = await selectAllUsers()
       } else {
          users = await filterUsers(name)
          if(users.length === 0) {
             errorCode = 404
             throw new Error("Não existe nenhum usuário com esse nome.")
          }
       }
 
       res.status(200).send(users)
        
     } catch (error: any) {
        res.status(errorCode).send(error.message)
     }
  }