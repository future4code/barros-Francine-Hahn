// ------------------- Exercícios de interpretação de código -------------------------

/* 1. Leia o código abaixo:

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

a) O que vai ser impresso no console?

R: Matheus Nachtergaele
Virginia Cavendish
{canal: "Globo", horario: "14h"}

*/




/* 2. Leia o código abaixo:

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a) O que vai ser impresso no console?
R:
{ nome: 'Juca', idade: 3, raca: 'SRD' }
{ nome: 'Juba', idade: 3, raca: 'SRD' }
{ nome: 'Jubo', idade: 3, raca: 'SRD' }


b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
R: O spread operator copia tudo que está contido naquele objeto.

*/




/* 3. Leia o código abaixo:

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) O que vai ser impresso no console?
R:
false
undefined


b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
R: Isso ocorrei pois não existe a chave altura no objeto pessoa.

*/




// ------------------------- Exercícios de escrita de código ---------------------------

/* 1. Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

Exemplo de entrada
const pessoa = {
   nome: "Amanda", 
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

Exemplo de saída
"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

*/

let pessoa = {
    nome: 'Francine',
    apelidos: ['Fran', 'Franci', 'Mana']
}

let recebeObjeto = (obj) => console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}.`)

recebeObjeto(pessoa)

/* b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto */

let pessoa2 = {
    ...pessoa,
    apelidos: ['Cine', 'Frã', 'Miga']
}

recebeObjeto(pessoa2)




/* 2. Resolva os passos a seguir: 
    
a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. */

let person1 = {
    nome: 'Joana',
    idade: 25,
    profissao: 'Dentista'
}

let person2 = {
    nome: 'Rafael',
    idade: 20,
    profissao: 'Advogado'
}


/* b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`

*/

let recebeObj = (obj) => [obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length]

console.log(recebeObj(person1))
console.log(recebeObj(person2))




// 3. Resolva os passos a seguir: 
    
// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
let carrinho = []    

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
let fruta1 = {
    nome: 'maçã',
    disponibilidade: true
}

let fruta2 = {
    nome: 'uva',
    disponibilidade: true
}

let fruta3 = {
    nome: 'manga',
    disponibilidade: true
}

// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.
let recebeFruta = (obj) => carrinho.push(obj)
recebeFruta(fruta1)
recebeFruta(fruta2)
recebeFruta(fruta3)

// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
console.log(carrinho)




// ------------------------------------- DESAFIOS ---------------------------------------

// 1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

let infosUsuario = () => {
    let info = {
        nome: prompt('Qual é o seu nome?'),
        idade: Number(prompt('Qual é a sua idade?')),
        profissão: prompt('Qual é a sua profissão?')
    }
    console.log(info)
}

infosUsuario()




/* 2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

O primeiro filme foi lançado antes do segundo? false
O primeiro filme foi lançado no mesmo ano do segundo? true

*/
let filme1 = {
    anoLançamento: 2010,
    nome: 'A Proposta'
}

let filme2 = {
    anoLançamento: 2010,
    nome: 'A Verdade Nua e Crua'
}

let recebe2obj = (obj1, obj2) => {
    console.log(`O primeiro filme foi lançado antes do segundo? ${obj1.anoLançamento < obj2.anoLançamento}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${obj1.anoLançamento === obj2.anoLançamento}`)
}

recebe2obj(filme1, filme2)




//3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido.

let estoque = (obj) => {return {
        ...obj,
        disponibilidade: false
    }
}

console.log(estoque(fruta1))
