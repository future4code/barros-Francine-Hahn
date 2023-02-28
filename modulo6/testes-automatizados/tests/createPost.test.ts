import { PostDatabase } from "../src/data/PostDatabase"
import { createPost } from "../src/functionsToBeTested/createPost"
import { POST_TYPES } from "../src/Model/Post"
import { generateId } from "../src/services/generateId"

const postDatabase = new PostDatabase()

const newPost = {
    id: generateId(),
    photo: "www.teste.com.br/photo1",
    description: "TESTE",
    type: POST_TYPES.NORMAL,
    created_at: new Date(),
    author_id: "62460fd9-6a77-487b-a119-05cf9c3857eb"
}

describe("Testing the createPost endpoint", () => {
    afterAll(async () => {
        await postDatabase.deletePostById(newPost.id)
        await postDatabase.destroyConnection()
    })

    test("Should receive a post information and return a success message", async () => {
        const result = await createPost(newPost)
        expect(result).toBe("Success!")
    })
})