type Client = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clients: Client[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const clientsWithNegativeBalance = (array: Client[]) => {
    const filter = array.filter(item => {
        if (item.debitos.length > 0) {
            return item.saldoTotal - item.debitos.reduce((a: number, b: number) => a + b) < 0
        }        
    })

    return filter.map(item => {
        return {
            cliente: item.cliente,
            saldoTotal: item.saldoTotal - item.debitos.reduce((a: number, b: number) => a + b),
            debitos: []
        }
    })
}

console.log(clientsWithNegativeBalance(clients))
