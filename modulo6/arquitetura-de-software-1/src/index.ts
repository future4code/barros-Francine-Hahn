import {app} from "./app"
import { UserController } from "./controller/UserController"


app.get("/test", () => {
   console.log("endpoint teste")
})

const user = new UserController()

//Exercício 1
app.post("/users", user.createUser)

//Exercício 2
app.get("/users", user.getAllUsers)

//Exercício 3
app.delete("/users/:id", user.deleteUser)


