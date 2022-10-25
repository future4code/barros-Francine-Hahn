import express, {Request, Response} from "express"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

//Exercicio 1
app.get("/", (req: Request, res: Response) => {          
    res.send('Hello World!')
})

//Exercicio 2
type UserInfo = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
}

//Exercício 3
const users: UserInfo[] = [
    {id: "nifdvdf-rvdd4-fbfd4-gbfgaa", name: 'Francine Hahn', phone: 51998561256, email: 'fran_hahn@hotmail.com', website: 'www.franhahn.com.br'},
    {id: "nifdvdf-rvdd4-fbfd4-gbfgab", name: 'Maria Melo', phone: 11917221934, email: 'maria.melo@gmail.com', website: 'www.mariamelo.com.br'},
    {id: "nifdvdf-rvdd4-fbfd4-gbfgac", name: 'José Ferreira', phone: 54995562771, email: 'jose.ferreira@hotmail.com', website: 'www.joseferreira.com.br'},
    {id: "nifdvdf-rvdd4-fbfd4-gbfgad", name: 'Laura Silva', phone: 21891743894, email: 'laura-silva@gmail.com', website: 'www.laurasilva.com'}
]

//Exercicio 4
app.get("/users", (req: Request, res: Response) => {
    const usersList = users.map(item => item)

    res.status(201).send(usersList)
})

//Exercicio 5
type PostInfo = {
    id: string,
    title: string,
    body: string,
    userId: string
}

//Exercicio 6
const posts: PostInfo[] = [
    {
        id: "232343-34343-3453-456450",
        title: "Milagre da manhã",
        body: "Conheça o melhor livro sobre hábitos saudáveis",
        userId: "nifdvdf-rvdd4-fbfd4-gbfgaa"
    },
    {
        id: "232343-34343-3453-456451",
        title: "Curso de programação online",
        body: "Venha aprender o nosso curso online de programação",
        userId: "nifdvdf-rvdd4-fbfd4-gbfgab"
    },
    {
        id: "232343-34343-3453-456452",
        title: "Maquiagem para noivas",
        body: "Conheça as nossas maravilhosas maquiadoras para te deixar ainda mais linda no grande dia!",
        userId: "nifdvdf-rvdd4-fbfd4-gbfgac"
    },
    {
        id: "232343-34343-3453-456453",
        title: "Restaurante vegano",
        body: "O melhor restaurante vegano de Porto Alegre!",
        userId: "nifdvdf-rvdd4-fbfd4-gbfgaa"
    },
    {
        id: "232343-34343-3453-456454",
        title: "Show do U2 no Beira Rio",
        body: "Adquira o seu ingresso para o melhor show do ano.",
        userId: "nifdvdf-rvdd4-fbfd4-gbfgad"
    }
]

//Exercicio 7
app.get("/posts", (req: Request, res: Response) => {
    const postsList = posts.map(item => item)

    res.status(201).send(postsList)
})

//Exercicio 8
app.get("/posts/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const userPosts = posts.filter(item => item.userId === id)

    res.status(201).send(userPosts)
})

//Exercicio 9



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})