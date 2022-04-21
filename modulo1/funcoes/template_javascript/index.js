//------------------------Exercícios de interpretação de código------------------------------

/* 1. Leia o código abaixo:


function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


a) O que vai ser impresso no console?
R: 10
50


b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
R: Não apareceria nada no console. A função seria executada, porém não apareceria nada para o usuário.

*/




/* 2. Leia o código abaixo:


let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


a. Explique o que essa função faz e qual é sua utilidade
R: Essa é uma expressão de função que recebe um texto digitado pelo usuário, transforma todas as palavras em minúsculas e retorna true caso haja a palavra "cenoura" no texto ou false caso não haja.



b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`
R: i. true
   ii. true
   iii. false

*/



//----------------------------Exercícios de escrita de código-------------------------------

/* 1. Escreva as funções explicadas abaixo:
    
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]. */

let infoSobreMim = () => `Eu sou Francine, tenho 30 anos, moro em Porto Alegre e sou estudante.`

let infoSobreUsuário = (nome, idade, cidade, profissão) => `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`




/* 2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas. */

let soma = (n1, n2) => n1 + n2
console.log(soma(10, 55))

let maiorOuIgual = (n1, n2) => n1 >= n2

let ehPar = n1 => n1 % 2 == 0

let msg = prompt('Digite a sua mensagem')
let tamanhoMsg = mensagem => {
    console.log(mensagem.length)
    console.log(mensagem.toUpperCase())
}
tamanhoMsg(msg) 




/* 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10
*/

let somatório = (n1, n2) => n1 + n2
let subtração = (n1, n2) => n1 - n2
let multiplicação = (n1, n2) => n1 * n2
let divisão = (n1, n2) => n1 / n2

let num1 = Number(prompt('Insira o primeiro número'))
let num2 = Number(prompt('Insira o segundo número'))

console.log(`Números inseridos: ${num1} e ${num2}
Soma: ${somatório(num1, num2)}
Diferença: ${subtração(num1, num2)}
Multiplicação: ${multiplicação(num1, num2)}
Divisão: ${divisão(num1, num2)}`)




//-----------------------------------DESAFIOS--------------------------------------

/* 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    
    a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
    
    b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
*/

let imprime = (p) => console.log(p)

let somaImprime = (n1, n2) => imprime(n1+n2)
console.log(somaImprime(10, 20))




/* 2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. */

let hipotenusa = (cat1, cat2) => Math.sqrt((cat1 ** 2) + (cat2 ** 2))
console.log(hipotenusa(10, 5))














