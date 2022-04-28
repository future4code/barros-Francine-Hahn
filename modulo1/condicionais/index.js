// ----------------------------- Exercícios de interpretação de código --------------------------------

/* 1. Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Explique o que o código faz. Qual o teste que ele realiza? 
R: O código testa se o número é par. Se ele for par, o resto da divisão dele por 2 será igual a zero. Nesse caso, será impresso no console "Passou no teste." Caso contrário, se o número dor ímpar, será impresso no console "Não passou no teste.".


b) Para que tipos de números ele imprime no console "Passou no teste"? 
R: Para números pares.

c) Para que tipos de números a mensagem é "Não passou no teste"?
R: Para número ímpares, onde o resto da divisão por 2 será diferente de zero.

*/




/* 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


a) Para que serve o código acima?
R: O código serve paradeterminar o preço da fruta escolhida pelo usuário. Por exemplo, se o usuário digitar 'Uva', o preço da fruta será 0.30.


b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
R: A mensagem será: O preço da fruta Maçã é R$ 2.25


c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
R: O sistema continuaria processando o resto do código até chegar no próximo break. Nesse caso, o preço da pêra seria de 5 reais, pois o próximo break está no default.

*/




/* 3. Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
    console.log(mensagem)
}

console.log(mensagem)

a) O que a primeira linha está fazendo?
R: A primeira linha pede ao usuário para digitar um número e já o transforma no tipo number.

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
R: Se o número digitado fosse 10, a mensagem impressa no console seria "Esse número passou no teste". Porém, se o número digitado fosse -10, nada seria impresso no console.

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
R: Sim, haverá um erro relacionado à variável mensagem que foi declarada dentro do bloco if. Nesse caso, o console.log(mensagem) deveria ter sido colocado dentro do bloco if, logo abaixo da variável, pois ela não é uma variável global.

*/




// ----------------------------------- Exercícios de escrita de código ------------------------------------------

/* 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."` */

let idade = Number(prompt('Qual é a sua idade?'))
if (idade >= 18) {
    console.log('Você pode dirigir')
} else {
    console.log('Você não pode dirigir')
}




/* 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else */

let turnoEstudo = prompt(`Qual turno você estuda?
Digite M para matutino, V para vespertino ou N para noturno`)

if (turnoEstudo === 'M') {
    console.log('Bom dia!')
} else if (turnoEstudo === 'V'){
    console.log('Boa tarde!')
} else if (turnoEstudo === 'N') {
    console.log('Boa noite!')
} else {
    console.log('Não encontrado')
}




// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

switch (turnoEstudo) {
    case 'M':
        console.log('Bom dia!')
        break
    case 'V':
        console.log('Boa tarde!')
        break
    case 'N':
        console.log('Boa noite!')
        break
    default:
        console.log('Não encontrado')
        break
}




// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

let gêneroFilme = prompt('Qual o gênero do filme?')
let preçoIngresso = Number(prompt('Qual o preço do ingresso?'))

if (gêneroFilme === 'fantasia' && preçoIngresso < 15) {
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
}




// -------------------------------------------------- DESAFIOS ----------------------------------------------------------

// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

if (gêneroFilme === 'fantasia' && preçoIngresso < 15) {
    let lanche = prompt('Qual lanche você vai comprar?')
    console.log(`Bom filme!
Aproveite o seu ${lanche}.`)
} else {
    console.log('Escolha outro filme :(')
}




/* 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:

- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos
    
O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10) */

let nomeCompleto = prompt('Qual seu nome completo?')
let tipoDeJogo = prompt('Qual o tipo de jogo? IN(internacional) ou DO(doméstico?)')
let etapaDoJogo = prompt('Qual a etapa do jogo? SF(semi-final), DT(decisão de terceiro lugar) ou FI(final)')
let categoria = Number(prompt('Qual a categoria? 1, 2, 3 ou 4?'))
let quantidadeIngressos = Number(prompt('Quantos ingressos você deseja?'))
let valorIngresso

let jogoFutebol = (tipo, etapa, categoria) => {
    if (etapa === 'SF' && categoria === 1 || etapa === 'FI' && categoria === 2) {
        tipo === 'DO'? valorIngresso = 1320 : valorIngresso = 1320 / 4.1
    } else if (etapa === 'SF' && categoria === 2) {
        tipo === 'DO'? valorIngresso = 880 : valorIngresso = 880 / 4.1
    } else if (etapa === 'SF' && categoria === 3) {
        tipo === 'DO'? valorIngresso = 550 : valorIngresso = 550 / 4.1
    } else if (etapa === 'SF' && categoria === 4) {
        tipo === 'DO'? valorIngresso = 220 : valorIngresso = 220 / 4.1
    } else if (etapa === 'DT' && categoria === 1) {
        tipo === 'DO'? valorIngresso = 660 : valorIngresso = 660 / 4.1
    } else if (etapa === 'DT' && categoria === 2) {
        tipo === 'DO'? valorIngresso = 440 : valorIngresso = 440 / 4.1
    } else if (etapa === 'DT' && categoria === 3) {
        tipo === 'DO'? valorIngresso = 330 : valorIngresso = 330 / 4.1
    } else if (etapa === 'DT' && categoria === 4) {
        tipo === 'DO'? valorIngresso = 170 : valorIngresso = 170 / 4.1
    } else if (etapa === 'FI' && categoria === 1) {
        tipo === 'DO'? valorIngresso = 1980 : valorIngresso = 1980 / 4.1
    } else if (etapa === 'FI' && categoria === 3) {
        tipo === 'DO'? valorIngresso = 880 : valorIngresso = 880 / 4.1
    } else {
        tipo === 'DO'? valorIngresso = 330 : valorIngresso = 330 / 4.1
    }
    console.log(`---Dados da compra---
Nome do cliente: ${nomeCompleto}
Tipo do jogo: ${tipoDeJogo} 
Etapa do jogo: ${etapaDoJogo}
Categoria: ${categoria}
Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
---Valores---`)
    if (tipo === 'DO') {
        console.log(`Valor do ingresso: R$ ${valorIngresso}
Valor total: R$ ${valorIngresso * quantidadeIngressos}`)
    } else {
        console.log(`Valor do ingresso: U$ ${valorIngresso}
Valor total: U$ ${valorIngresso * quantidadeIngressos}`)
    }
}

jogoFutebol(tipoDeJogo, etapaDoJogo, categoria)