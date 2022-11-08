//a) A entrada será um array de números e a saída será um objeto com três chaves de tipo number

function obterEstatisticas(numeros:number[]):{maior: number, menor: number, media: number} {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//b) As outras variáveis são os números ordenados que é um array de números, soma que é um number e estatísticas que é um objeto.

//c)
type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: {
        maior: number,
        menor: number,
        media: number
    }
}

const amostraDeIdades: AmostraDeDados = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: obterEstatisticas([21, 18, 65, 44, 15, 18])
}

console.log(amostraDeIdades)