import { app } from "./app"
import { PostController } from "./controller/PostController"
import { UserController } from "./controller/UserController"

const userController = new UserController()
const postController = new PostController()

app.post("/users/login", userController.login)
app.post("/posts/create", postController.createPost)