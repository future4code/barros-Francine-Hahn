import { MovieDatabase } from "../data/MovieDatabase"
import { CustomError } from "../error/customError"
import { InvalidDuration, InvalidYearOfRelease, MissingDescription, MissingDuration, MissingTitle, MissingYearOfRelease } from "../error/movieError"
import { createMovieDTO } from "../models/CreateMovieDTO"
import { Movie } from "../models/Movie"
import { idGenerator } from "../services/idGenerator"


export class MovieBusiness {

    async create (input: createMovieDTO): Promise<void> {
        try {
            if (!input.title) {
                throw new MissingTitle()
            }
    
            if (!input.description) {
                throw new MissingDescription()
            }
    
            if (!input.duration_in_minutes) {
                throw new MissingDuration
            }

            if (input.duration_in_minutes <= 0) {
                throw new InvalidDuration()
            }
    
            if (!input.year_of_release) {
                throw new MissingYearOfRelease()
            }

            if (input.year_of_release.toString().length !== 4) {
                throw new InvalidYearOfRelease()
            }
        
            const newMovie = new Movie(
                idGenerator(),
                input.title,
                input.description,
                input.duration_in_minutes,
                input.year_of_release
            )

            const movieDatabase = new MovieDatabase()
            await movieDatabase.create(newMovie)

        } catch (error:any) {
            throw new CustomError( error.statusCode, error.message)
        }
    }

    
    async getAll(): Promise<Movie[]> {
        try {
            return await new MovieDatabase().getAll()
        } catch (error: any) {
            throw new CustomError( error.statusCode, error.message)
        }
    }
}