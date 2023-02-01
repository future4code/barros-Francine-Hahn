import { UserController } from "../controller/UserController"
import express from "express"


export const userRouter = express.Router()
const userController = new UserController()

userRouter.get("/", userController.getAll)
userRouter.get("/profile",userController.userInfo)
userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)