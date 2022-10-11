/*Exercício 1
a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?*/

/*RESPOSTA: Para passar os parâmetros, devemos digitar o seguinte na linha de comando: 

node ./nome-arquivo.js valor
OU
npm run nome-script valor

Após, é necessário atribuir o process.argv[indice] à uma variável para poder acessá-la.

Exemplo:
linha de comando: node ./index.js Francine OU npm run start Francine
const name = process.argv[2]
*/

/*b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga
a seguinte estrutura:*/
const clientName = process.argv[2]
const clientAge = Number(process.argv[3])

const printNameAndAge = (name, age) => {
    console.log(`Olá, ${name}! Você tem ${age} anos.`)
}

printNameAndAge(clientName, clientAge)

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
const printNameAndAgePlus7 = (name, age) => {
    console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7} anos.`)
}

printNameAndAgePlus7(clientName, clientAge)