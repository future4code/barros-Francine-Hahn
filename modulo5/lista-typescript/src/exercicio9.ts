const returnIfCpfIsValid = (cpf: string): boolean | string => {
    const validation = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/.test(cpf)
    
    if (validation) {
        cpf = cpf.replace('.', '').replace('.', '').replace('-', '')
  
        let sum = 0
        let cont = 10
        let dv1
        let dv2

        for (let i = 0; i < cpf.length - 2; i++) {
            sum += Number(cpf[i]) * cont
            cont -= 1
        }
        11 - (sum % 11) < 10 ? dv1 = 11 - (sum % 11) : dv1 = 0

        sum = 0
        cont = 11
        for (let i = 0; i < cpf.length - 2; i++) {
            sum += Number(cpf[i]) * cont
            cont -= 1
        }
        11 - (sum % 11) < 10 ? dv2 = 11 - (sum % 11) : dv2 = 0

        return Number(cpf[9]) === dv1 && Number(cpf[10]) === dv2

    } else {
        return 'CPF em formato inválido.'
    }
    
}

console.log(returnIfCpfIsValid('009.857.020-01'))
console.log(returnIfCpfIsValid('00985702001'))
console.log(returnIfCpfIsValid('005.975.440-09'))