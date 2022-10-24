enum ROLE {
    USER = 'user',
    ADMIN = 'admin'
}

type User = {
    name: string,
    email: string,
    role: ROLE
}

const users: User[] = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}    
]

const returnEmailAdmin = (array: User[]): string[] => {
    const admin = array.filter(item => item.role === ROLE.ADMIN)
    const listOfEmails: string[] = []
    admin.forEach(item => listOfEmails.push(item.email))
    return listOfEmails
}

console.log(returnEmailAdmin(users))