import {Request, Response} from 'express'
import { connection } from '../data/connection'

//Exercício 4
/* Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação).
Atribua valores padrão para filtragem, ordenação e paginação para que:

- Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
- Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem **decrescente;**
- Caso o usuário não forneça número de página, deve começar na página 1

*/

export async function selectAllUsers(orderby: string, offset: number):Promise<any> {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio ORDER BY ${orderby} LIMIT 5 OFFSET ${offset};
   `)

   return result[0]
}

export async function filterUsers(name: string = "", type: string, orderby: string, offset: number):Promise<any> {
   let result
   if (name !== "" && type === ":type") {
      result = await connection.raw(`
         SELECT * FROM aula48_exercicio WHERE name LIKE '%${name}%' ORDER BY ${orderby} LIMIT 5 OFFSET ${offset};
      `)
   } else if (name === "" && type !== ":type") {
      result = await connection.raw(`
         SELECT * FROM aula48_exercicio WHERE type = '${type}' ORDER BY ${orderby} LIMIT 5 OFFSET ${offset};
      `)
   } else if (name !== "" && type !== ":type") {
      result = await connection.raw(`
         SELECT * FROM aula48_exercicio WHERE name LIKE '%${name}%' AND type = '${type}' ORDER BY ${orderby} LIMIT 5 OFFSET ${offset};
      `)
   }
   
   return result[0]
}


export const getAllUsers = async(req: Request, res: Response): Promise<void> => {
   const name = req.query.name as string
   const type = req.params.type as string
   const page = Number(req.query.page)
   let orderby = req.query.orderby as string
   let errorCode = 400
   let offset = 0
   let users
   
   try {

      if(type !== ':type' && type.toUpperCase() !== 'CX' && type.toLowerCase() !== 'teacher' && type.toLowerCase() !== 'operations') {
         errorCode = 404
         throw new Error("O tipo informado não existe.")
      }

      if(orderby && orderby !== 'type' && orderby !== 'name') {
         errorCode = 404
         throw new Error("O tipo informado para ordenação não existe.")
      }

      if (!orderby) {
         orderby = 'name DESC'
      }

      if(!page) {
         offset = 0
      } else if (page) {
         offset = 5 * (page - 1)
      }

      if (!name && type === ':type') {
         users = await selectAllUsers(orderby, offset)
      } else if (name || type !== ':type') {
         users = await filterUsers(name, type, orderby, offset)
         if(users.length === 0) {
            errorCode = 404
            throw new Error("Não existe nenhum usuário com esse nome e/ou com esse tipo na página escolhida.")
         }
      }
       
      res.status(200).send(users)

      } catch (error: any) {
         res.status(errorCode).send(error.message)
      }
 }


