// ---------------------------- Exercícios de interpretação de código ---------------------------------

/* 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

R: A variável valor é igual ao valor mais o incremento (i) e o i assume os valores de 0 até 4. Então, a variável valor será responsável por guardar o valor do i e depois somá-lo ao próximo valor de i, até que o i assuma o valor de 4. Então o resultado será a soma de todos os valores de i, que será de 0 a 4. Por isso, o valor impresso no console será 10. */




/* 2. Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) O que vai ser impresso no console?
R: Todos os valores contidos na lista que forem maiores do que 18.

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
R: Sim, é possível acessar o índice de cada elemento com o for of. Nesse caso, eu usaria lista[i] e declararia a variável i = 0 e adicionaria um incremento i++.

*/




/* 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

R: O resultado seria:
*
**
***
****
Seriam impressas quatro linhas, pois o while determina que a repetição ocorra da quantidade atual que é zero, até o número digitado pelo usuário.
A quantidade de asteriscos impressa em cada linha é determinada pelo for, que indica que apenas um asterisco será acrescentado à variável linha a cada repetição. Porém, como a variável linha guarda os asteriscos anteriores, cada repetição imprimirá um asterisco a mais.

*/




// ---------------------------------- Exercícios de escrita de código --------------------------------------------

/* 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

    c) Por fim, imprima o array com os nomes dos bichinhos no console */

let listaNomes = []
while (true) {
    let numeroPets = Number(prompt('Quantos bichinhos de estimação você tem?'))
    if (numeroPets === 0) {
        console.log('Que pena! Você pode adotar um pet!')
        break
    } else if (numeroPets > 0) {
        for (let i = 0; i < numeroPets; i++) {
            listaNomes.push(prompt('Qual o nome de cada um dos seus bichinhos?'))
        }
        console.log(listaNomes)
        break
    } else {
        alert('Não conseguimos entender a sua resposta. Tente novamente!')
    }
}




/* 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
    a) Escreva um programa que **imprime** cada um dos valores do array original.
    
    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original */

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let imprimeCadaValor = array => {
    for (let numero of array) {
        console.log(numero)
    }
}

let imprimeValoresDivididoPor10 = array => {
    for (let numero of array) {
        console.log(numero / 10)
    }
}

let numParesDoArray = array => {
    let listaNumPares = []
    for (let numero of array) {
        if (numero % 2 === 0) {
            listaNumPares.push(numero)
        }
    }
    return listaNumPares
}

let criaNovoArray = array => {
    let novaLista = []
    for (let i = 0; i < array.length; i++) {
        novaLista.push(`O elemento do índex ${i} é: ${array[i]}`)
    }
    return novaLista
}

let maiorMenorNum = array => {
    let maiorNum = array[0]
    let menorNum = array[0]
    for (let numero of array) {
        if (numero <= menorNum) {
            menorNum = numero
        }
    }
    for (let numero of array) {
        if (numero >= maiorNum) {
            maiorNum = numero
        }
    }
    console.log(`O maior número é ${maiorNum} e o menor é ${menorNum}`)
}




//---------------------------------------------- DESAFIOS --------------------------------------------------

/* 1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas.

a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`

b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:

- O número chutado, com a mensagem: `O número chutado foi: <número>`
- Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`

c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu */

alert('Vamos jogar!')
let numEscolhido = Number(prompt('Escolha um número'))
let tentativas = 0
while (true) {
    let numAposta = Number(prompt('Qual o número que você acha que seu oponente escolheu?'))
    tentativas += 1
    if (numAposta > numEscolhido) {
        alert(`O número chutado foi: ${numAposta}.
Errou! O número escolhido é menor.`)
    } else if (numAposta < numEscolhido) {
        alert(`O número chutado foi: ${numAposta}.
Errou! O número escolhido é maior.`)
    } else {
        alert(`Acertou!
O número de tentativas foi: ${tentativas}`)
        break
    }
}




/* 2. Vamos pedir para que você faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
    
Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre esta reflexão.** */

alert('Vamos jogar!')
let numSorteado = Math.floor(Math.random() * 100)
let tentativa = 0
while (true) {
    let numAposta = Number(prompt('Qual o número que você acha que seu oponente escolheu?'))
    tentativa += 1
    if (numAposta > numSorteado) {
        alert(`O número chutado foi: ${numAposta}.
Errou! O número escolhido é menor.`)
    } else if (numAposta < numSorteado) {
        alert(`O número chutado foi: ${numAposta}.
Errou! O número escolhido é maior.`)
    } else {
        alert(`Acertou!
O número de tentativas foi: ${tentativa}`)
        break
    }
}

//Foi fácil de fazer as alterações. Achei a resposta bem rápido no google.







