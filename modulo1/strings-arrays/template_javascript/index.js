//-------------------- Exercícios de interpretação de código -----------------------

/* 1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)
R: A variavel array foi declarada, porém nenhum valor foi atribuído a ela. Então, será impresso no console 'undefined'.

array = null
console.log('b. ', array)
R: O null deveria estar entre aspas, pois é uma string. Nesse caso, provavelmente dará erro.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
R: Será impresso: c. 12

let i = 0
console.log('d. ', array[i])
R: Será impresso: d. 3

array[i+1] = 19
console.log('e. ', array)
R: Será impresso: e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

const valor = array[i+6]
console.log('f. ', valor)
R: Será impresso: f. 9

*/




/* 2.

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

R: SUBI NUM ÔNIBUS EM MIRROCOS 27

*/




//--------------------------- Exercícios de escrita de código -------------------------------

/* 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */

let nome = prompt('Qual é o seu nome?')
let email = prompt('Qual é o seu e-mail?')

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)




/* 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista */

let comidasPreferidas = ['sushi', 'frutos do mar', 'pizza', 'hambúrger', 'massa']
console.log(comidasPreferidas)

console.log(`Essas são as minhas comidas preferidas:
1 - ${comidasPreferidas[0]}
2 - ${comidasPreferidas[1]}
3 - ${comidasPreferidas[2]}
4 - ${comidasPreferidas[3]}
5 - ${comidasPreferidas[4]}`)

let comidaPreferidaUsuário = prompt('Qual é a sua comida preferida?')
comidasPreferidas[1] = comidaPreferidaUsuário
console.log(comidasPreferidas)



/* 3. Faça um programa, seguindo os passos:
    
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array no console

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array no console */

let listaDeTarefas = []
let tarefa1 = prompt('Qual é a primeira tarefa que você precisa realizar no dia?')
listaDeTarefas.push(tarefa1)
let tarefa2 = prompt('Qual é a segunda tarefa que você precisa realizar no dia?')
listaDeTarefas.push(tarefa2)
let tarefa3 = prompt('Qual é a terceira tarefa que você precisa realizar no dia?')
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let escolha = prompt(`Digite o número da tarefa que você já realizou:
1 - ${tarefa1}
2 - ${tarefa2}
3 - ${tarefa3}`)

listaDeTarefas.splice(escolha - 1, 1)
console.log(listaDeTarefas)



//----------------------------------- DESAFIOS ---------------------------------------

// 1 - Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

let frase = prompt('Digite uma frase:')
console.log(frase.split(' '))




// 2 - Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(`O índice da palavra 'Abacaxi' é ${frutas.indexOf('Abacaxi')} e o tamanho do array é ${frutas.length}.`)

