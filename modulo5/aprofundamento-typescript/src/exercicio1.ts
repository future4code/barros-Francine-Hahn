//a) const minhaString:string = 1
//R: aparece um erro: 'Type number is not assignable to type string.'

//b)const meuNumber:number = 'oi'
/*R: aparece um erro: 'Type string is not assignable to type number.' Para fazer com que a variável também aceite strings, é necessário utilizar o '|'.
Exemplo: const meuNumber:string | number = 'oi
*/

//c)
type Person = {
    nome: string,
    idade: number,
    corFavorita: coresArcoIris
}

enum coresArcoIris {
    'VERMELHO'= 'vermelho',
    'LARANJA' = 'laranja',
    'AMARELO' = 'amarelo',
    'VERDE' = 'verde',
    'AZUL' = 'azul',
    'ANIL' = 'anil',
    'VIOLETA' = 'violeta'
}

const person1: Person = {
    nome: 'Isadora',
    idade: 22,
    corFavorita: coresArcoIris.LARANJA
}

const person2: Person = {
    nome: 'Francine',
    idade: 31,
    corFavorita: coresArcoIris.AZUL
}

const person3: Person = {
    nome: 'Maria',
    idade: 28,
    corFavorita: coresArcoIris.VIOLETA
}