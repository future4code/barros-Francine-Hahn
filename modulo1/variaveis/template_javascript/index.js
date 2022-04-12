//------ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ------

/* Exercício 1:

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

R: O console irá imprimir na tela o valor guardado na variável number b, que é 10. Após, será impresso na tela o valor guardado em a e depois b, que será 10 e 5 (será impresso 10 5). */



/* Exercício 2: 
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

R: O console irá imprimir na tela: 10 10 10 */


/* Exercício 3:

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

R: let horasTrabalhoDia = prompt("Quantas horas você trabalha por dia?")
   let salarioPorDia = prompt("Quanto você recebe por dia?")
   alert(`Voce recebe ${salarioPorDia/horasTrabalhoDia} por hora`)
*/



//------ EXERCÍCIOS DE ESCRITA DE CÓDIGO ------

//Exercício 1:

let nome
let idade
console.log(typeof nome, typeof idade)

/* R: O console imprimiu na tela: undefined undefined
O motivo disso ocorre porque eu não atribui nenhum valor às variáveis nome e idade, então as variáveis são reconhecidas, pois foram declaradas, mas não possuem nenhum tipo, já que nada foi atribuído a elas. */

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")
console.log(typeof nome, typeof idade)

/* R: O console imprimiu: string string
Isso ocorre porque todas as respostas digitadas pelo usuário serão consideradas strings. Se quisermos que a variável idade se torne um number, precisamos fazer a conversão de string para number. */

console.log("Olá", nome, ", você tem", idade, "anos.")


//Exercício 2:

roupaAzul = prompt("Você está usando uma roupa azul hoje? - SIM ou NÃO")
console.log("Você está usando uma roupa azul hoje?", roupaAzul)

tênisPreto = prompt("Você está usando tênis preto hoje? SIM ou NÃO")
console.log("Você está usando um tênis preto hoje?", tênisPreto)

óculos = prompt("Você está usando óculos hoje? SIM ou NÃO")
console.log("Você está usando óculos hoje?", óculos)


//Exercício 3:

let a = 10
let b = 25
let c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)


//DESAFIO:

numero1 = Number(prompt("Digite o primeiro número:"))
numero2 = Number(prompt("Digite o segundo número:"))
let soma = numero1 + numero2
let multiplicação = numero1 * numero2

console.log("A soma do", numero1, "com o", numero2, "é", soma, ".")
console.log("A multiplicação do", numero1, "por", numero2, "é", multiplicação, ".")





