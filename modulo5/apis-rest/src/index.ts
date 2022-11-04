import express, {Response, Request} from "express"
import cors from 'cors'
import { users } from "./data"
import { resolveAny } from "dns"


const app = express()
app.use(express.json())
app.use(cors())

//exercicio 1
//a) O método é o get
//b) A entidade é users
app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users)
})


//exercício 2
//a) Passei os parâmetros por query, pois é muito utilizado para filtrar partes de um array.
//b) Sim, caso o tipo digitado não exista (se for diferente de ADMIN e de NORMAL), o sistema retorna um erro 404.

app.get('/users/type', (req: Request, res: Response) => {
    const userType = req.query.type as string
    let error = 400
    
    try {
        if(!userType) {
            error = 422
            throw new Error('Indique qual o tipo de usuário você deseja pegar.')
        } else if (userType.toUpperCase() !== 'ADMIN' && userType.toUpperCase() !== 'NORMAL') {
            error = 404
            throw new Error('O tipo do usuário não existe.')
        }

        const filterByType = users.filter(item => item.type === userType.toUpperCase())
        res.status(200).send(filterByType)

    } catch(e: any) {
        res.status(error).send(e.message)
    }
})


//Exercicio 3
//a) O parâmetro mais utilizado nesse caso é o params
//b) Feito abaixo.

app.get('/users/:name', (req: Request, res: Response) => {
    const userName = req.params.name
    let error = 400

    try {
        if (userName === ':id') {
            error = 422
            throw new Error('Passe o parâmetro nome.')
        }

        const filterByName = users.filter(item => item.name.toLowerCase() === userName.toLowerCase())

        if (filterByName.length === 0) {
            error = 404
            throw new Error('Usuário não encontrado.')
        }

        res.status(200).send(filterByName)

    } catch (err: any) {
        res.status(error).send(err.message)
    }
})


//Exercicio 4
//a) Se alterarmos o método para PUT, nada irá mudar no resultado.
//b) Nesse caso, o método PUT não é indicado, pois queremos criar um novo usuário e não editar os dados de um usuário existente.

app.post('/users', (req: Request, res: Response) => {
    const {name, email, type, age} = req.body
    let error = 400

    try {
        if (!name || !email || !type || !age) {
            error = 422
            throw new Error('Faltou passar algum dos parâmetros a seguir: name, email, type ou age.')
        } else if (typeof name !== 'string' || typeof email !== 'string' || typeof type !== 'string') {
            error = 422
            throw new Error('Os parâmetros name, email e type devem ser do tipo string.')
        } else if (typeof age !== 'number') {
            error = 422
            throw new Error('O parâmetro age deve ser do tipo number.')
        } else if (type.toUpperCase() !== 'NORMAL' && type.toUpperCase() !== 'ADMIN') {
            error = 422
            throw new Error('O parâmetro type deve ser ADMIN ou NORMAL.')
        }

        users.push({
            id: Date.now(),
            name: name,
            email: email,
            type: type.toUpperCase(),
            age: age
        })

        res.status(201).send(users)

    } catch (err: any) {
        res.status(error).send(err.message)
    }
})


//Exercicio 5
app.put('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id
    const newUserName = req.body.name
    let error = 400

    try {
        if (userId === ':id') {
            error = 422
            throw new Error('Você precisa passar o parâmetro id.')
        } else if (!newUserName) {
            error = 422
            throw new Error('Você precisa passar o parâmetro name no body.')
        } else if (typeof newUserName !== 'string') {
            error = 422
            throw new Error('O parâmetro name precisa ser do tipo string.')
        }

        const filterUserId = users.filter(item => item.id === Number(userId))

        if (filterUserId.length === 0) {
            error = 404
            throw new Error('O parâmetro id não existe.')
        }

        users.forEach(item => {
            if (Number(userId) === item.id) {
                item.name = `${newUserName} - ALTERADO`
            }
        })

        res.status(201).end()

    } catch (err: any) {
        res.status(error).send(err.message)
    }
})


//Exercicio 6
app.patch('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id
    const newUserName = req.body.name
    let error = 400

    try {
        if (userId === ':id') {
            error = 422
            throw new Error('Você precisa passar o parâmetro id.')
        } else if (!newUserName) {
            error = 422
            throw new Error('Você precisa passar o parâmetro name no body.')
        } else if (typeof newUserName !== 'string') {
            error = 422
            throw new Error('O parâmetro name precisa ser do tipo string.')
        }

        const filterUserId = users.filter(item => item.id === Number(userId))

        if (filterUserId.length === 0) {
            error = 404
            throw new Error('O parâmetro id não existe.')
        }

        users.forEach(item => {
            if (Number(userId) === item.id) {
                item.name = `${newUserName} - REALTERADO`
            }
        })

        res.status(201).end()

    } catch (err: any) {
        res.status(error).send(err.message)
    }
})


//Exercicio 7
app.delete('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id
    let error = 400

    try {
        if (userId === ':id') {
            error = 422
            throw new Error('Você precisa passar o parâmetro id.')
        }

        const filterUserId = users.filter(item => item.id === Number(userId))

        if (filterUserId.length === 0) {
            error = 404
            throw new Error('O parâmetro id não existe.')
        }

        const usersNotDeleted = users.filter(item => item.id !== Number(userId))

        res.status(201).send(usersNotDeleted)

    } catch (err: any) {
        res.status(error).send(err.message)
    }
})


app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003')
})