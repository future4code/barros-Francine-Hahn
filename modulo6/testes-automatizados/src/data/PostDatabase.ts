import { post } from "../Model/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    TABLE = "labook_posts"

    createPost = async (newPost: post): Promise<void> => {
        try {
            await BaseDatabase.connection(this.TABLE).insert(newPost)
        
        } catch (error:any) {
            throw new Error(error.message)
        }
    }


    deletePostById = async (id: string): Promise<void> => {
        try {
            await BaseDatabase.connection(this.TABLE).where({id}).delete()
        
        } catch (error:any) {
            throw new Error(error.message)
        }
    }


    destroyConnection = async (): Promise<void> => {
        try {
            await BaseDatabase.connection.destroy()
        
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}