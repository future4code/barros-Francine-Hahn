//Adição de clientes na lista
const clients = [
	{ id: 1, nome: 'Fulano' },
	{ id: 2, nome: 'Ciclano' },
	{ id: 3, nome: 'Beltrano' },
	{ id: 4, nome: 'Fulana' }
]

let regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{1,}$/

const clientRegistration = (id, clientName) => {
    if(typeof id === 'string' && typeof clientName === 'string') {
        return `Erro. Parâmetro inválido (${id})`
    } else if(typeof id === 'string' && typeof clientName !== 'string') {
        return `Erro. Parâmetros inválidos (${id}, ${clientName})`
    } else if(id <= clients.length) {
        return `Erro. Parâmetro inválido (’id já existe’).`
    } else if(typeof id === 'number' && typeof clientName === 'string' && !regex.test(clientName)) {
        clients.push({id: id, nome: clientName})
        return clients
    } else if(typeof id === 'number' && (typeof clientName === 'number' || regex.test(clientName))) {
        return `Erro. Parâmetro inválido (${clientName})`
    }
}

console.log(clientRegistration(4, 'Francine'))
console.log(clientRegistration('cinco', 'Francine'))
console.log(clientRegistration(5, 'Francine'))
console.log(clientRegistration(6, 'Fran&cine'))


//Geração de tabuada
const multiplicationTable = (number) => {
    if (typeof number ==='number' && (number > 10 || number < 1)) {
        return `Erro. Parâmetro inválido (número precisa valer entre 1 e 10).`
    } else if (typeof number === 'string') {
        return `Erro. Parâmetro inválido (deve ser um número).`
    } else {
        return `${number} x 0 = 0
${number} x 1 = ${number}
${number} x 2 = ${number * 2}
${number} x 3 = ${number * 3}
${number} x 4 = ${number * 4}
${number} x 5 = ${number * 5}
${number} x 6 = ${number * 6}
${number} x 7 = ${number * 7}
${number} x 8 = ${number * 8}
${number} x 9 = ${number * 9}
${number} x 10 = ${number * 10}`
    }
}

console.log(multiplicationTable("10"))
console.log(multiplicationTable(0))
console.log(multiplicationTable(11))
console.log(multiplicationTable(5))