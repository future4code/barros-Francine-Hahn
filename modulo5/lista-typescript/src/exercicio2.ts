const printVariableType = (a: any): void => {
    if (typeof a === 'string') {
        console.log('A variável é uma string.')
    } else if (typeof a === 'number') {
        console.log('A variável é um number.')
    } else if (typeof a === 'boolean') {
        console.log('A variável é um boolean.')
    } else if (typeof a === 'object') {
        console.log('A variável é um object.')
    }
}

printVariableType(true)
printVariableType(15)
printVariableType('Olá')
printVariableType({nome: 'Francine', idade: 31})
printVariableType([1, 2, 3, 4, 5])