import { Movie } from "../models/Movie"
import { BaseDatabase } from "./BaseDatabase"
import { CustomError } from "../error/customError"


export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE"

    async create (newMovie: Movie): Promise<void> {
        try {
            await BaseDatabase.connection
            .insert(newMovie)
            .into(MovieDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError( error.statusCode, error.message)
        }
    }


    async getAll(): Promise<Movie[]> {
        try {
            const result = await BaseDatabase.connection.select().from(MovieDatabase.TABLE_NAME)
            return result

        } catch (error: any) {
            throw new CustomError( error.statusCode, error.message)
        }
    }
}