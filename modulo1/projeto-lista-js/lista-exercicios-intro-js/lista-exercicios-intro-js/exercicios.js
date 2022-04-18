// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt("Digite a altura do retângulo:"))
  let largura = Number(prompt("Digite a largura do retângulo:"))
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Digite o ano atual:"))
  let anoNascimento = Number(prompt("Digite o seu ano de nascimento:"))
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual é o seu nome?")
  let idade = Number(prompt("Qual é a sua idade?"))
  let email = prompt("Qual é o seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let listaCores = []
  let cor1 = listaCores.push(prompt("Qual é a sua primeira cor favorita?"))
  let cor2 = listaCores.push(prompt("Qual é a sua segunda cor favorita?"))
  let cor3 = listaCores.push(prompt("Qual é a sua terceira cor favorita?"))
  console.log(listaCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let tamanho = string1.length == string2.length
  return tamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let últimoIndice = array[0]
  let primeiroIndice = array[array.length - 1]
  array[0] = primeiroIndice
  array[array.length - 1] = últimoIndice
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let stringsIguais = string1.toUpperCase() === string2.toUpperCase()
  return stringsIguais
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt('Qual o ano atual?'))
  let anoNascimento = Number(prompt('Qual o seu ano de nascimento?'))
  let anoRgEmitido = Number(prompt('Qual o ano que a sua carteira de identidade foi emitida?'))
  let idade = anoAtual - anoNascimento
  let tempoDeEmissao = anoAtual - anoRgEmitido
  if (idade <= 20) {
    console.log(tempoDeEmissao >= 5)
  } else if (idade > 20 && idade <= 50) {
    console.log(tempoDeEmissao >= 10)
  } else {
    console.log(tempoDeEmissao >= 15)
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let maior18anos = prompt('Você tem mais de 18 anos?')
  let ensimoMédioCompleto = prompt('Você possui ensino médio completo?')
  let tempoDisponível = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  console.log(maior18anos === 'sim' && ensimoMédioCompleto === 'sim' && tempoDisponível === 'sim')
}