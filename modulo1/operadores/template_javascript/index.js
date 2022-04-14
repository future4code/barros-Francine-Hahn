//------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO -------

/* 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
R: SERÁ IMPRESSO NA TELA: a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)
R: SERÁ IMPRESSO NA TELA: b. false


resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
R: SERÁ IMPRESSO NA TELA: c. true


console.log("d. ", typeof resultado)
R: SERÁ IMPRESSO NA TELA: d. boolean */




/* 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

R: NÃO É POSSÍVEL SOMAR DUAS STRINGS. POR ISSO, ELAS SERÃO CONCATENADAS. OU SEJA, SE A PRIMEIRA VARIÁVEL FOR 10 E A SEGUNDA FOR 20, SERÁ IMPRESSO 1020 NA TELA. */




/* 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

R: DEVE-SE FAZER A CONVERSÃO DE STRING PARA NUMBER COMO NO EXEMPLO ABAIXO:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) */




//------- EXERCÍCIOS DE ESCRITA DE CÓDIGO -------

/* 1. Faça um programa que:
    
a) Pergunte a idade do usuário
    
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo) */


let idade = Number(prompt("Qual é a sua idade?"))
let idadeAmigo = Number(prompt("Qual é a idade do(a) seu/sua melhor amigo(a)?"))
let idadeEhMaior = idade > idadeAmigo

console.log("Sua idade é maior do que a do(a) seu/sua melhor amigo(a)?", idadeEhMaior)

let diferençaIdade = idade - idadeAmigo

console.log(`A diferença de idade entre vocês é de ${diferençaIdade} anos.`)




/* 2. Faça um programa que:
    
a) Peça ao usuário que insira um número **par**
    
b) Imprima na console **o resto da divisão** desse número por 2.
    
c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */

let númeroPar = Number(prompt("Insira um número par:"))
let restoDaDivisão = númeroPar % 2
console.log(`O resto da divisão de ${númeroPar} por 2 é: ${restoDaDivisão}`)

// R: SIM, HÁ UM PADRÃO. TODOS OS RESTOS DAS DIVISÕES DÃO ZERO, PORQUE QUALQUER NÚMERO PAR DIVIDIDO POR 2 TERÁ COMO RESTO ZERO.

// R: SE O USUÁRIO INSERIR UM NÚMERO ÍMPAR, O RESTO DA DIVISÃO SERÁ MAIOR DO QUE 0.




/* 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
a) A idade do usuário em meses
    
b) A idade do usuário em dias
    
c) A idade do usuário em horas */

let idadeAnos = Number(prompt("Qual é a sua idade em anos?"))
let idadeMeses = idadeAnos * 12
let idadeDias = idadeMeses * 30
let idadeHoras = idadeDias * 24

console.log(`A sua idade é igual a ${idadeMeses} meses ou ${idadeDias} dias ou ${idadeHoras} horas.`)



/* 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações. */

let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))

console.log("O primeiro numero é maior que o segundo?", num1 > num2)
console.log("O primeiro numero é igual ao segundo?", num1 === num2)
console.log("O primeiro numero é divisível pelo segundo?", num1 % num2 == 0)
console.log("O segundo numero é divisível pelo segundo?", num2 % num1 == 0)



//------ DESAFIOS ------

/* 1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:

- Graus Fahrenheit(°F) para Kelvin(K):
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

- Graus Celsius(°C) para Graus Fahrenheit (°F):
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter */

let tempFahr = 77
let tempFahrToKelvin = (tempFahr - 32) * (5 / 9) + 273.15
console.log(`A temperatura de ${tempFahr}ºF representa ${tempFahrToKelvin}K.`)

let tempCelsius = 80
let tempCelsiusToFahr = (tempCelsius) * (9 / 5) + 32
console.log(`A temperatura de ${tempCelsius}ºC representa ${tempCelsiusToFahr}ºF.`)

tempCelsius = 30
tempCelsiusToFahr = (tempCelsius) * (9 / 5) + 32
tempFahrToKelvin = (tempCelsiusToFahr - 32) * (5 / 9) + 273.15
console.log(`A temperatura de ${tempCelsius}ºC representa ${tempCelsiusToFahr}ºF e ${tempFahrToKelvin}K.`)

tempCelsius = Number(prompt("Digite a temperatura em ºC"))
tempCelsiusToFahr = (tempCelsius) * (9 / 5) + 32
tempFahrToKelvin = (tempCelsiusToFahr - 32) * (5 / 9) + 273.15
console.log(`A temperatura de ${tempCelsius}ºC representa ${tempCelsiusToFahr}ºF e ${tempFahrToKelvin}K.`)



/* 2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
    
a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
    
b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto */

let quilowattHora = 0.05
let consumo = 280
let custoEnergia = consumo * quilowattHora
console.log(`O valor a ser pago de energia é de R$${custoEnergia}.`)

let desconto = custoEnergia * 0.15
let valorFinalEnergia = custoEnergia - desconto
console.log(`O valor final a ser pago de energia após apliocação de 15% de desconto é de R$${valorFinalEnergia}.`)



// 3. Faça o que se pede:
    
//a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 20lb equivalem a X kg

let lb = 20
let lbToKg = lb / 2.2
console.log(`${lb}lb equivalem a ${lbToKg} kg`)



//b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 10.5oz equivalem a X kg

let oz = 10.5
let ozToKg = oz / 35.3
console.log(`${oz}oz equivalem a ${ozToKg} kg`)



//c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 100mi equivalem a X m

let mi = 100
let miToMetro = mi * 1609
console.log(`${mi}mi equivalem a ${miToMetro} m`)



//d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 50ft equivalem a X m

let pés = 50
let pésToMetro = pés / 3.3
console.log(`${pés}ft equivalem a ${pésToMetro} m`)



//e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 103.56gal equivalem a X l
    
let gal = 103.56
let galToLitro = gal * 3.8
console.log(`${gal} gal equivalem a ${galToLitro} l`)



//f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 450 xic equivalem a X l

let xic = 450
let xicToLitro = xic * 0.24
console.log(`${xic} xic equivalem a ${xicToLitro} l`)



//g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter

xic = Number(prompt("Quantas xícaras você gostaria de converter para litros?"))
xicToLitro = xic * 0.24
console.log(`${xic} xic equivalem a ${xicToLitro} l`)



// ---------------------------- FIM :) --------------------------------









































