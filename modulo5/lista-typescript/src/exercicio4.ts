enum SECTORS {
    MARKETING = 'Marketing',
    VENDAS = 'Vendas',
    FINANCEIRO = 'Financeiro'
}

type Employee = {
    nome: string,
    salário: number,
    setor: SECTORS,
    presencial: boolean
}

const listOfEmployees: Employee[] = [
	{ nome: "Marcos", salário: 2500, setor: SECTORS.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SECTORS.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SECTORS.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SECTORS.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SECTORS.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SECTORS.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SECTORS.MARKETING, presencial: true}
]

const whoWorksInTheOffice = (array: Employee[]): Employee[] => {
    return listOfEmployees.filter(item => item.setor === SECTORS.MARKETING && item.presencial === true)
}

console.log(whoWorksInTheOffice(listOfEmployees))