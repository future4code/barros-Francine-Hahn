//Sistema de login
const validateEmail = /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/
const validatePassword = /.{6,}/

const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

const login = (clientEmail = '', clientPassword = '') => {
    if (validateEmail.test(clientEmail) && validatePassword.test(clientPassword)) {
        const email = contas.filter(item => item.email === clientEmail)
        const password = contas.filter(item => item.password === clientEmail)
        if (email && password) {
            return 'Login bem-sucedido.'
        } else {
            return 'E-mail ou senha incorretos.'
        }
    } else if (!validateEmail.test(clientEmail) && validatePassword.test(clientPassword)) {
        return 'E-mail imválido'
    } else if (validateEmail.test(clientEmail) && !validatePassword.test(clientPassword)) {
        return 'Senha deve possuir no mínimo 6 caracteres'
    } else {
        return 'E-mail e senha inválidos.'
    }
}

console.log(login('fran', '123456'))
console.log(login('fran@hotmail.con', '12345'))
console.log(login('bananinha@gmail.com'))
console.log(login('bananinha@gmail.com', 'bananinha'))
console.log(login('fran', '123'))
