import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { inputPostDTO } from "../Model/Post"


export class PostController {
    createPost = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: inputPostDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                token: req.headers.authorization as string
            }
            
            const postBusiness = new PostBusiness()
            await postBusiness.createPost(input)
        
            res.status(201).send("Success! The post has been posted.")
        
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}