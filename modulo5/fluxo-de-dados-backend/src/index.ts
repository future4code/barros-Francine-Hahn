import express, {Response, Request} from "express"
import cors from 'cors'
import {products} from './data'


const app = express()
app.use(express.json())
app.use(cors())

//Exercicio 1
app.get('/test', (req: Request, res: Response) => {
    res.status(200).send('Servidor rodando na porta 3003!')
})

//Exercicio 2
//Arquivo data.ts

//Exercicio 3
//Arquivo types.ts

//Exercicio 4
app.post('/products/add', (req: Request, res: Response) => {
    const {name, price} = req.body

    try {
        if (!name) {
            const error = new Error("O nome do produto não foi informado!")
            error.name = "productDataNotFound"
            throw error
        } else if (price===undefined) {
            const error = new Error("O preço do produto não foi informado!")
            error.name = "productDataNotFound"
            throw error
        } else if (typeof name !== 'string') {
            const error = new Error("O valor de name deve ser do tipo string!")
            error.name = "productDataNotFound"
            throw error
        } else if (typeof price !== 'number') {
            const error = new Error("O valor de price deve ser do tipo number!")
            error.name = "productDataNotFound"
            throw error
        } else if (price <= 0) {
            const error = new Error("O valor de price deve ser maior do que zero!")
            error.name = "productDataNotFound"
            throw error
        }

        const product = {
            id: Date.now().toString(),
            name: name,
            price: price
        }

        products.push(product)
        res.status(201).send(products)

    } catch (e: any) {
        if (e.name === "productDataNotFound") {
            res.status(422).send(e.message)
        } else {
            res.status(500).send(e.message)
        }
    }
})

//Exercicio 5
app.get('/products', (req: Request, res: Response) => {
    const searchProduct = req.query.search
    
    if (searchProduct === undefined) {
        res.status(200).send(products)
    } else {
        const productsSearched = products.filter(item => item.name === searchProduct)
        res.status(200).send(productsSearched)
    }
})

//Exercicio 6
app.put('/products/product/:id', (req: Request, res: Response) => {
    const productId = req.params.id
    const {name, price} = req.body
    
    try {
        if (productId===':id') {
            const error = new Error('O id do produto não foi informado.')
            error.name = "dataNotFound"
            throw error
        }

        const filterProduct = products.filter(item => item.id === productId)

        if (filterProduct.length === 0) {
            const error = new Error('O id do produto não existe.')
            error.name = "IdNonexistent"
            throw error
        } else if (price === undefined && name === undefined) {
            const error = new Error('O preço e o nome do produto não foram informados.')
            error.name = "dataNotFound"
            throw error
        } else if (price !== undefined && typeof price !== 'number') {
            const error = new Error('O valor de price deve ser do tipo number.')
            error.name = "dataNotFound"
            throw error
        } else if (price !== undefined && price <= 0) {
            const error = new Error('O valor de price deve ser maior do que zero.')
            error.name = "dataNotFound"
            throw error
        }

        for (let product of products) {
            if (product.id === productId) {
                if (name !== undefined) {
                    product.name = name
                } else if (price !== undefined) {
                    product.price = Number(price)
                }
            }
        }

        res.status(201).send(products)

    } catch (e: any) {
        if (e.name === 'dataNotFound') {
            res.status(422).send(e.message)
        } else if (e.name === 'IdNonexistent') {
            res.status(404).send(e.message)
        } else {
            res.status(500).send(e.message)
        }
    }
})

//Exercicio 7
app.delete('/products/product/:id', (req: Request, res: Response) => {
    const productId = req.params.id
    
    try {
        if (productId===':id') {
            const error = new Error('O id do produto não foi informado.')
            error.name = "dataNotFound"
            throw error
        }

        const filterProduct = products.filter(item => item.id === productId)

        if (filterProduct.length === 0) {
            const error = new Error('O id do produto não existe.')
            error.name = "idNonexistent"
            throw error
        }

        const productsNotDeleted = products.filter(item => item.id !== productId)

        res.status(201).send(productsNotDeleted)

    } catch (e: any) {
        if (e.name === 'dataNotFound') {
            res.status(422).send(e.message)
        } else if (e.name === 'IdNonexistent') {
            res.status(404).send(e.message)
        } else {
            res.status(500).send(e.message)
        }
    }
})

//Exercicio 8
//Aplicado no exercício 4

//Exercicio 9
//Aplicado no exercicio 6

//Exercicio 10
//Aplicado no exercicio 7

//Exercicio 11
//Aplicado no exercicio 5

//Exercicio 12
//Aplicado no exercicio 6

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})