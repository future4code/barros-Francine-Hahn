// --------------------------------- Exercícios de interpretação de código -------------------------------------

/* 1.
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

a) O vai ser impresso no console?
R: Serão impressos os 3 objetos separadamente contidos dentro do array usuarios. Ou seja:

{ nome: "Amanda Rangel", apelido: "Mandi" }
{ nome: "Laís Petra", apelido: "Laura" }
{ nome: "Letícia Chijo", apelido: "Chijo" }

*/




/* 2.
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

a) O vai ser impresso no console?
R: Será impresso no console um array com os nomes. Ou seja:
['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

*/




/* 3.
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

a) O vai ser impresso no console?
R: Irá ser impresso no console um array contendo os objetos com apelidos que são diferentes de Chijo. Ou seja:
[{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }]

*/




// ----------------------------------- Exercícios de escrita de código ---------------------------------------

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos
const nomePets = pets.map((item) => item.nome)
console.log(nomePets)

// b) Crie um novo array apenas com os [cachorros salsicha]
const salsichas = pets.filter((item) => item.raca === 'Salsicha')
console.log(salsichas)


// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!" */
const poodles = pets.filter((item) => item.raca === 'Poodle')
const msgPoodles = poodles.map((item) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`) 
console.log(msgPoodles)




// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item
const nomeItens = produtos.map((item) => item.nome)
console.log(nomeItens)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const desconto5 = produtos.map((item) => {
  return {
    nome: item.nome,
    preço: (item.preco * 0.95).toFixed(2)
  }
})

console.log(desconto5)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const bebidas = produtos.filter((item) => item.categoria === 'Bebidas')
console.log(bebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const ype = produtos.filter((item) => item.nome.includes('Ypê'))
console.log(ype)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const frasePorItem = ype.map((item) => `Compre ${item.nome} por ${item.preco}`)
console.log(frasePorItem)




//------------------------------------------------ DESAFIOS ------------------------------------------------

// 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]

// a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
const nomePokemons = pokemons.map((item) => item.nome)
const nomePokemonsOrdemAlf = nomePokemons.sort()
console.log(nomePokemonsOrdemAlf)

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
const tipoPokemons = pokemons.map((item) => item.tipo)
const tipoFiltrado = tipoPokemons.filter((item, index) => tipoPokemons.indexOf(item) == index)
console.log(tipoFiltrado)







