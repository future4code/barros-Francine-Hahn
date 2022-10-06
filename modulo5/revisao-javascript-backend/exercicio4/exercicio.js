//Gerador de itens únicos
const firstList = [
    {nome: 'Laranja'},
    {nome: 'Cenoura'},
    {nome: 'Cebola'},
    {nome: 'Morango'},
    {nome: 'Cenoura'}
]

const secondList = [
    {nome: 'Uva'},
    {nome: 'Cenoura'},
    {nome: 'Cebola'},
    {nome: 'Uva'}
]

const generateUniqueItems = (list1, list2) => {
    const uniqueItems = []
    let equal

    uniqueItems.push(list1[0])
    list1.shift()
    
    const includeUniqueItems = (list) => {
        for (let i = 0; i < list.length; i++) {
            for (let c = 0; c < uniqueItems.length; c++) {
                if (list[i].nome === uniqueItems[c].nome) {
                    equal = true
                    break 
                } else {
                    equal = false
                } 
            }
            !equal ? uniqueItems.push(list[i]) : undefined
        }
    }

    includeUniqueItems(list1)
    includeUniqueItems(list2)

    return uniqueItems
}

console.log(generateUniqueItems(firstList, secondList))