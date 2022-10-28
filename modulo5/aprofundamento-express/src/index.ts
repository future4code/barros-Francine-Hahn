import express, {Response, Request} from "express"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

//Exercicio 1
app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
})

//Exercicio 2
type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

//Exercicio 3
const toDoList: ToDo[] = [
    {userId: 1, id: 10201, title: "Arrumar a cama", completed: true},
    {userId: 1, id: 10202, title: "Lavar a louça", completed: true},
    {userId: 1, id: 10203, title: "Passear com o cachorro", completed: false},
    {userId: 2, id: 10204, title: "Varrer a casa", completed: true},
    {userId: 2, id: 10205, title: "Ir para a academia", completed: false},
    {userId: 3, id: 10206, title: "Fazer o almoço", completed: false}
]

//Exercicio 4
app.get("/todos", (req: Request, res: Response) => {
    const todos = req.query.completed

    const tasks = toDoList.filter(item => item.completed.toString() === todos)

    todos === "true" || todos === "false" ? res.status(200).send(tasks) : res.status(400).send('Forneça qual tipo de tarefas deseja receber (completadas ou não completadas).')
})

//Exercicio 5
app.post("/todos/task/create", (req: Request, res: Response) => {
    const userId = req.headers.authorization
    const {title, completed} = req.body

    if (title === undefined || completed === undefined || !userId) {
        res.status(400).send('Insira todos os dados do afazer que deseja criar.')
    } else {
        for (let i = 0; i < toDoList.length; i++) {
            if (Number(userId) !== toDoList[i].userId) {
                toDoList.splice(i, 0, {userId: Number(userId), id: Date.now(), title: title, completed: completed})
                break
            }
        }
        res.status(201).send(toDoList)
    }
})

//Exercício 6
app.put("/todos/task/edit/:taskId", (req: Request, res: Response) => {
    const taskId = req.params.taskId
    const editCompleted = req.body.completed

    if (taskId === undefined || editCompleted === undefined) {
        res.status(400).send('Informar o id da tarefa ou as informações do body.')
    } else {
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i].id === Number(taskId)) {
                toDoList[i].completed = editCompleted
            }
        }
        res.status(201).send(toDoList)
    }
})

//Exercicio 7
app.delete("/todos/task/delete/:taskId", (req: Request, res: Response) =>{
    const taskId = req.params.taskId

    if (taskId === undefined) {
        res.status(400).send('Informar o id da tarefa que deseja deletar.')
    } else {
        const filter = toDoList.filter(item => item.id !== Number(taskId))
        res.status(201).send(filter)
    }
})

//Exercicio 8
app.get("/todos/:id", (req: Request, res: Response) => {
    const userId = req.params.id

    if (!userId) {
        res.status(400).send('Adicione o id do usuário.')
    } else {
        const tasksOfUserSelected = toDoList.filter(item => item.userId === Number(userId))
        const tasksOfTheOtherUsers = toDoList.filter(item => item.userId !== Number(userId))
        
        res.status(200).send({
            todos: {
                selectedUser: tasksOfUserSelected,
                others: tasksOfTheOtherUsers
            }
        })
    }
})

//Exercicio 9
//Link da documentação: https://documenter.getpostman.com/view/22375317/2s8YKAo4ss

//Exercicio 10
//Aplicado diretamente no exercício8


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})