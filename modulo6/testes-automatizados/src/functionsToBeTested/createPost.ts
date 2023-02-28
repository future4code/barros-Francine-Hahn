import { PostDatabase } from "../data/PostDatabase"
import { post } from "../Model/Post"


export const createPost = async (newPost: post) => {
    const postDatabase = new PostDatabase()
    await postDatabase.createPost(newPost)
    return "Success!"
}