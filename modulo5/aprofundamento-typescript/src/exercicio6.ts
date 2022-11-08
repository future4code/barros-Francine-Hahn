enum Classification {
    SUMMER = 'Verão',
    WINTER = 'Inverno',
    BATH = 'Banho',
    UNDERWEAR = 'Roupa íntima'
}

type Product = {
    name: string,
    price: number,
    classification: Classification
}

const listOfProducts: Product[] = [
    {name: 'Biquini', price: 59, classification: Classification.BATH},
    {name: 'Casaso', price: 359, classification: Classification.WINTER},
    {name: 'Saia', price: 69, classification: Classification.SUMMER},
    {name: 'Lingerie', price: 89, classification: Classification.UNDERWEAR}
]

const returnProducts = (array: Product[]) => {
    return array.map(item => {
        if(item.classification === 'Verão') {
            return {...item, priceWithDiscount: item.price - (item.price * 0.05)}
        } else if (item.classification === 'Inverno') {
            return {...item, priceWithDiscount: item.price - (item.price * 0.1)}
        } else if (item.classification === 'Banho') {
            return {...item, priceWithDiscount: item.price - (item.price * 0.04)}
        } else if (item.classification === 'Roupa íntima') {
            return {...item, priceWithDiscount: item.price - (item.price * 0.07)}
        }
    })
}

console.table(returnProducts(listOfProducts))