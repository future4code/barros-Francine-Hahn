type Dish = {
    name: string,
    costPrice: number,
    sellingPrice: number,
    ingredients: string[]
}

const listOfDishes: Dish[] = [
    {
        name: 'Massa quatro queijos',
        costPrice: 34.90,
        sellingPrice: 69.90,
        ingredients: ['massa spaghetti', 'creme de leite', 'queijo parmesão', 'queijo provolone', 'queijo mussarela', 'queijo brie']
    },
    {
        name: 'Pizza portuguesa',
        costPrice: 29.90,
        sellingPrice: 59.90,
        ingredients: ['massa de pizza', 'molho de tomate', 'queijo mussarela', 'pimentão', 'ovo', 'cebola']
    }
]


//a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global
const registerAproduct = () => {
    const dishName = process.argv[2]
    const cost = process.argv[3]
    const price = process.argv[4]
    const ingredients = process.argv[5]
    listOfDishes.push({
        name: dishName,
        costPrice: Number(cost),
        sellingPrice: Number(price),
        ingredients: ingredients.split(',')
    })
}

registerAproduct()
console.log(listOfDishes)


//b) Escreva uma função que recebe um nome e devolve o valor do produto com este nome.
const returnPriceOfProduct = (dishName:string) => {
    const filter = listOfDishes.filter(item => item.name === dishName)
    return `R$${filter[0].sellingPrice}`
}

console.log(returnPriceOfProduct('Pizza portuguesa'))


//c) Escreva uma função para que ele venda um prato. Salve as vendas em um array no escopo global.
const listOfSoldDishes:Dish[] = [
    {
        name: 'Pizza portuguesa',
        costPrice: 29.90,
        sellingPrice: 59.90,
        ingredients: ['massa de pizza', 'molho de tomate', 'queijo mussarela', 'pimentão', 'ovo', 'cebola']
    }
]

const sellAproduct = () => {
    const dishName = process.argv[2]
    const filter = listOfDishes.filter(item => item.name === dishName)
    listOfSoldDishes.push(...filter)
}

sellAproduct()
console.log(listOfSoldDishes)


//d) Escreva uma função que determine o lucro do restaurante
const determineProfit = () => {
    let costPrice = 0
    for (let dishes of listOfSoldDishes) {
        costPrice += dishes.costPrice
    }

    let sellingPrice = 0
    for (let dishes of listOfSoldDishes) {
        sellingPrice += dishes.sellingPrice
    }
    
    return `Lucro: R$${sellingPrice - costPrice}`
}

console.log(determineProfit())