/*Exercício 2
Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos.
O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.*/
const operator = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

const mathOperation = (operator, num1, num2) => {
    if (operator === 'add') {
        return num1 + num2
    } else if (operator === 'sub') {
        return num1 - num2
    } else if (operator === 'mult') {
        return num1 * num2
    } else if (operator === 'div') {
        return num1 / num2
    } else {
        return 'Desculpe, operador não encontrado.'
    }
}

const result = mathOperation(operator, number1, number2)
console.log(result)
