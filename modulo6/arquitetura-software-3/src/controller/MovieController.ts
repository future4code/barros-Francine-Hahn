import { Request, Response } from "express"
import { MovieBusiness } from "../business/MovieBusiness"
import { createMovieDTO } from "../models/CreateMovieDTO"


export class MovieController {
  
    async create (req: Request, res: Response): Promise<void> {
        try {
            const input: createMovieDTO = {
                title: req.body.title,
                description: req.body.description,
                duration_in_minutes: req.body.duration_in_minutes,
                year_of_release: req.body.year_of_release
            }
  
            const movieBusiness = new MovieBusiness()
            await movieBusiness.create(input)
  
            res.status(201).send({ message: "Filme cadastrado com sucesso" })
  
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }


    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const movieBusiness = new MovieBusiness()
            const result = await movieBusiness.getAll()
            res.status(200).send(result)

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}