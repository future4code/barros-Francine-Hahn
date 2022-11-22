import { app } from "./app"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getUsersByName } from "./endpoints/getUsersByName"
import {getUsersByType} from './endpoints/getUsersByType'
import {getUsersByOrder} from './endpoints/getUsersByOrder'
import { getUsersByPage } from "./endpoints/getUsersByPage"

//Exercício 1 letra a
app.get("/users/filterByName", getUsersByName)

//Exercício 1 letra b
app.get("/users/filterByType/:type", getUsersByType)

//Exercício 2
app.get("/users/order", getUsersByOrder)

//Exercício 3
app.get("/users/size5", getUsersByPage)

//Exercício 4
app.get("/users/:type", getAllUsers)