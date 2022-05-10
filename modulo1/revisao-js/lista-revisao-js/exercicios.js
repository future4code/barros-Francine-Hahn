// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((elem) => elem % 2 === 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return retornaNumerosPares(array).map((elem) => elem ** 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for(let numero of array) {
        if (numero > maiorNumero) {
            maiorNumero = numero
        }
    }
    return maiorNumero
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNum
    let diferença
    if (num1 > num2) {
        maiorNum = num1
        diferença = num1 - num2
    } else {
        maiorNum = num2
        diferença = num2 - num1
    }
    return {
        maiorNumero: maiorNum,
        maiorDivisivelPorMenor: num2 % num1 === 0,
        diferenca: diferença
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let listaPares = []
    for (let i = 0; i < n * 2; i++) {
        if (i % 2 === 0) {
            listaPares.push(i)
        }
    }
    return listaPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return 'Equilátero'
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        return 'Escaleno'
    } else {
        return 'Isósceles'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)
    return [array[array.length-2], array[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {
        ...pessoa,
        nome: 'ANÔNIMO'
    }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((elem) => elem.idade > 14 && elem.idade < 60 && elem.altura >= 1.5) 
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((elem) => elem.idade <= 14 || elem.idade >= 60 || elem.altura < 1.5)
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas[0].saldoTotal += - 600
    contas[1].saldoTotal += -1240 
    contas[2].saldoTotal += -13340
    contas[3].saldoTotal += -2000
    contas[4].saldoTotal += -500
    contas[5].saldoTotal += 0
    for (let i = 0; i < contas.length; i++) {
        contas[i].compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => a.nome > b.nome ? 1 : a.nome < b.nome ? -1 : 0)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    
}


// ------------------------------------------- DESAFIOS ------------------------------------------------

// DESAFIO DO EXERCÍCIO 2
const retornaArrayInvert = (array) => {
    const arrayInvertido = []
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
}

// DESAFIO DO EXERCÍCIO 3
const retornaArrayOrd = (array) => {
    let listaOrdenada =[]
    listaOrdenada.push(array[0])
    array.splice(0, 1)
    while (array.length > 0) {
        let c = 0
        while (c < listaOrdenada.length) {
            if (array[0] > listaOrdenada[listaOrdenada.length - 1]) {
                listaOrdenada.push(array[0])
                array.splice(0, 1)
                break
            } else if (array[0] > listaOrdenada[c] && array[0] < listaOrdenada[c+1]) {
                listaOrdenada.splice(c+1, 0, array[0])
                array.splice(0, 1)
                break
            } else if (array[0] < listaOrdenada[0]) {
                listaOrdenada.unshift(array[0])
                array.splice(0, 1)
                break
            } else {
                c++
            }
        }
    }
    return listaOrdenada
}


// DESAFIO EXERCÍCIO 4
const retornaNumPares = (array) => {
    const numPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numPares.push(array[i])
        }
    }
    return numPares
}








