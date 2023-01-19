import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'


export class MovieBusiness {

    async create({ title, description, duration_in_minutes, year_of_release }: any):Promise<void> {
        try {
            if (!title) {
                throw new Error("Informe o título do filme.")
            }
    
            if (!description) {
                throw new Error("Informe a descrição do filme.")
            }
    
            if (!duration_in_minutes) {
                throw new Error("Informe a duração do filme em minutos.")
            }
    
            if (!year_of_release) {
                throw new Error("Informe o ano de lançamento.")
            }
        
            const id = generateId()
        
            const movieDatabase = new MovieDatabase()
            await movieDatabase.create({id, title, description, duration_in_minutes, year_of_release})

        } catch (error:any) {
            throw new Error( error.message || "Error creating movie. Please check your system administrator.")
        }
    }

    async getAll () {
        try {
            return await new MovieDatabase().getAll()
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}