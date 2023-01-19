import {app} from "./app"
import { movieRouter } from "./routes/movieRouter"
import {userRouter} from "./routes/userRouter"

app.use("/users", userRouter)
app.use("/movies", movieRouter)

