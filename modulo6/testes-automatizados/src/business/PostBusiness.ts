import { PostDatabase } from "../data/PostDatabase"
import { UserDatabase } from "../data/UserDatabase"
import { inputPostDTO, post } from "../Model/Post"
import { Authenticator } from "../services/Authenticator"
import { generateId } from "../services/generateId"


export class PostBusiness {
    createPost = async (input: inputPostDTO): Promise<void> => {
        try {
            if (!input.token) {
                throw new Error("Provide the token.")
            }

            if (!input.description) {
                throw new Error("Provide the description.")
            }

            if (!input.photo) {
                throw new Error("Provide the photo url.")
            }

            if (!input.type) {
                throw new Error("Provide the post type.")
            }

            if (input.type !== "normal" && input.type !== "event") {
                throw new Error("The post type must be either normal or event.")
            }

            const authenticator = new Authenticator()
            const {id} = await authenticator.getTokenData(input.token)
    
            const postId = generateId()

            const newPost: post = {
                id: postId,
                photo: input.photo,
                description: input.description,
                type: input.type,
                created_at: new Date(),
                author_id: id
            }

            const postDatabase = new PostDatabase()
            await postDatabase.createPost(newPost)

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}