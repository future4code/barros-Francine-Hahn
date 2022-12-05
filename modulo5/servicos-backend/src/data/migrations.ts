import { connection } from "./connection"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTable = () => connection.raw(`
    CREATE TABLE AddressInfo (
        id INT AUTO_INCREMENT PRIMARY KEY,
        cep CHAR(8) NOT NULL,
        logradouro VARCHAR(100) NOT NULL,
        numero INT NOT NULL,
        complemento VARCHAR(20),
        bairro VARCHAR(40) NOT NULL,
        cidade VARCHAR(40) NOT NULL,
        estado CHAR(2) NOT NULL
    );
`).then(() => console.log('Tabela criada.')).catch(printError)

const finish = () => connection.destroy()

createTable().then(finish)
