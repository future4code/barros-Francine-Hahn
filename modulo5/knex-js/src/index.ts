import express, {Request, Response} from 'express'
import cors from 'cors'
import { connection } from './connection'

const app = express()
app.use(express.json())
app.use(cors())


//Exercício 1
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    console.log(await getActorById(id))
    res.end()

  } catch (error: any) {
	console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

//a) Explique como é a resposta que temos quando usamos o raw.
/* A resposta do código acima:
RowDataPacket {
    id: '001',
    actor_name: 'Tony Ramos',
    salary: 400000,
    birth_date: 1948-08-25T03:00:00.000Z,
    gender: 'male'
}

O método raw devolve uma promise e a resposta é um array com vários arrays dentro. A resposta que nos interessa é apenas o primeiro array,
por isso usamos o [0] para acessar o primeiro índice.
*/

//b) Faça uma função que busque um ator pelo nome;
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE actor_name = '${name}'
    `)
  
    return result[0][0]
}

(async () => {
    console.log(await getActorByName("Caio Castro") )
})()

/*c) Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes,
female e para atores male.*/
const getGenderCount = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(gender) as count FROM Actor WHERE gender = '${gender}';
    `)

    return result[0][0]
}

(async () => {
    console.log(await getGenderCount("male") )
})()


//Exercício 2
const createActor = async (id: string, name: string, salary: number, dateOfBirth: Date, gender: string): Promise<string> => {
    await connection
      .insert({
        id: id,
        actor_name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor")

      return "Ator adicionado com sucesso!"
  }

//a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
const updateSalary = async (salary: number, id: string): Promise<string> => {
    await connection("Actor").update({salary: salary}).where("id", id)
    return 'Sucesso!'
}

updateSalary(650000, '001')

//b) Uma função que receba um id e delete um ator da tabela
const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor").delete().where("id", id)
}

//deleteActor('003')

//c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender
const averageSalaryByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor").sum('salary').where({gender})
    return result[0].salary
}
console.log(averageSalaryByGender('female'))


//Exercicio 3
//a) Crie um endpoint com as especificações acima
app.get("/actor/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    let error = 400

    try {
        if(id === ':id') {
            error = 422
            throw new Error('É obrigatório passar o id do ator.')
        }

        const filterIds = await connection.raw(`
            SELECT id FROM Actor WHERE id = '${id}';
        `)

        if(filterIds[0][0] === undefined) {
            error = 404
            throw new Error('Id inexistente.')
        }
        
        const actor = await getActorById(id)
        res.status(200).send(actor)

    } catch (err: any) {
        res.status(error).send(err.message)
    }
  })

/*b) Crie um endpoint agora com as seguintes especificações:

- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero*/

app.get('/actor', async(req: Request, res: Response) => {
    const gender = req.query.gender
    let error = 400

    try {
        if (!gender) {
            error = 422
            throw new Error('É necessário passar o gender do ator/atriz.')   
        } else if (gender !== 'male' && gender !== 'female') {
            error = 422
            throw new Error('O gender só pode ser male ou female.')
        }

        const result = await getGenderCount(gender)
        res.status(200).send(result)

    } catch (err: any) {
        res.status(error).send(err.message)
    }
})


//Exercicio 4
app.post("/actor", async (req: Request, res: Response) => {
    const {id, actor_name, salary, birth_date, gender} = req.body
    let error = 400

    try {
        if(!id && !actor_name && !salary && !birth_date && !gender) {
            error = 422
            throw new Error('Informe o id, o nome, o salário, a data de nascimento e o sexo do ator.')
        } else if (!id) {
            error = 422
            throw new Error('Informe o id do ator.')
        } else if (!actor_name) {
            error = 422
            throw new Error('Informe o nome do ator.')
        } else if (!salary) {
            error = 422
            throw new Error('Informe o salário do ator.')
        } else if (!birth_date) {
            error = 422
            throw new Error('Informe a data de nascimento do ator.')
        } else if (!gender) {
            error = 422
            throw new Error('Informe o sexo do ator.')
        }

        const result = await createActor(id, actor_name, salary, new Date(birth_date), gender)
  
        res.status(200).send(result)
    
    } catch (err: any) {
      res.status(error).send(err.message);
    }
  })

//a) Endpoint para atualizar salário com id
app.put('/actor', async (req: Request, res: Response) => {
    const {id, salary} = req.body
    let error = 400

    try {
        if (!id && !salary) {
            error = 422
            throw new Error('É obrigatório informar o id e o novo salário do ator.')
        } else if (!id) {
            error = 422
            throw new Error('É obrigatório informar o id do ator.')
        } else if (!salary) {
            error = 422
            throw new Error('É obrigatório informar o novo salário.')
        }

        const filterIds = await connection.raw(`
            SELECT id FROM Actor WHERE id = '${id}';
        `)

        if(filterIds[0][0] === undefined) {
            error = 404
            throw new Error('Id inexistente.')
        }

        const result = await updateSalary(Number(salary), id)
        res.status(201).send(result)

    } catch (err: any) {
        res.status(error).send(err.message)
    }
})

//b) Endpoint para deletar ator da tabela
app.delete('/actor/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    let error = 400

    try {
        if (id === ':id') {
            error = 404
            throw new Error('É necessário passar o id.')
        }

        const filterIds = await connection.raw(`
            SELECT id FROM Actor WHERE id = '${id}';
        `)

        if(filterIds[0][0] === undefined) {
            error = 404
            throw new Error('Id inexistente.')
        }     
        
        const result = await deleteActor(id)
        res.status(200).send(result)

    } catch (err: any) {
        res.status(error).send(err.message)
    }
})


//Exercicio 5
const createMovie = async (id: string, title: string, synopsis: string, release_Date: Date, playing_limit_date: Date) => {
    await connection.raw(`
        INSERT INTO Movies VALUES ('${id}', '${title}', '${synopsis}', '${release_Date}', '${playing_limit_date}');
    `)
    return 'Sucesso!'
}

app.post('/movie', async (req: Request, res: Response) => {
    const {id, title, synopsis, release_Date, playing_limit_date} = req.body
    let error = 400

    try {
        if (!id && !title && !synopsis && !release_Date && !playing_limit_date) {
            error = 422
            throw new Error('Informe o id, title, synopsis, release_Date, playing_limit_date.') 
        } else if (!id) {
            error = 422
            throw new Error('Informe o id.')
        } else if (!title) {
            error = 422
            throw new Error('Informe o title.')
        } else if (!synopsis) {
            error = 422
            throw new Error('Informe a synopsis.')
        } else if (!release_Date) {
            error = 422
            throw new Error('Informe o release_Date.')
        } else if (!playing_limit_date) {
            error = 422
            throw new Error('Informe o playing_limit_date.')
        }

        const filterIds = await connection.raw(`
            SELECT id FROM Actor WHERE id = '${id}';
        `)

        if(filterIds[0][0] === undefined) {
            error = 404
            throw new Error('Id inexistente.')
        }

        const result = await createMovie(id, title, synopsis, release_Date, playing_limit_date)
        res.status(201).send(result)

    } catch (err: any) {
        res.status(error).send(err.message)
    }
})


//Exercicio 6
const returnMovies = async () => {
    const result = await connection.raw(`
        SELECT * FROM Movies LIMIT 15;
    `)

    return result[0]
}

app.get('/movie/all', async (req: Request, res: Response) => {
    try {
        const result = await returnMovies()
        res.status(200).send(result)
    } catch (err: any) {
        res.status(400).send(err.message)
    }
})


//Exercicio 7
const searchQuery = async (query: string) => {
    const result = await connection.raw(`
        SELECT * FROM Movies WHERE title LIKE '%${query}%' OR synopsis LIKE '%${query}%';
    `)

    return result[0]
}

app.get('/movie/search', async (req: Request, res: Response) => {
    const query = req.query.query as string
    let error = 400

    try {
        if (!query) {
            error = 422
            throw new Error("Informe a query.")  
        }

        const result = await searchQuery(query)
        res.status(200).send(result)

    } catch (err: any) {
        res.status(error).send(err.message)
    }
})



app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003')
})