import { connection } from "./connection"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTable = () => connection.raw(`
    CREATE TABLE aula48_exercicio (
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        type VARCHAR(255) NOT NULL
    );
`).then(() => console.log('Tabelas criadas.')).catch(printError)

const insertUsers = () => connection.raw(`    
    INSERT INTO aula48_exercicio VALUES (1,'Soter','soter@labenu','Teacher');
    INSERT INTO aula48_exercicio VALUES (2,'João','joao@labenu','Teacher');
    INSERT INTO aula48_exercicio VALUES (3,'Paula','paula@labenu','Teacher');
    INSERT INTO aula48_exercicio VALUES (4,'Amanda','amanda@labenu','Teacher');
    INSERT INTO aula48_exercicio VALUES (5,'Darvas','darvas@labenu','Teacher');
    INSERT INTO aula48_exercicio VALUES (6,'Severo','severo@labenu','Teacher');
    INSERT INTO aula48_exercicio VALUES (7,'Caio','caio@labenu','Teacher');
    INSERT INTO aula48_exercicio VALUES (8,'Chijo','chijo@labenu','Teacher');
    INSERT INTO aula48_exercicio VALUES (9,'Lais','lais@labenu','Teacher');
    INSERT INTO aula48_exercicio VALUES (10,'Bruno','bruno@labenu','Teacher');
    INSERT INTO aula48_exercicio VALUES (11,'Luciano','luciano@labenu','Operations');
    INSERT INTO aula48_exercicio VALUES (12,'Miau','miau@labenu','Operations');
    INSERT INTO aula48_exercicio VALUES (13,'Sekine','sekine@labenu','Operations');
    INSERT INTO aula48_exercicio VALUES (14,'Nathalia','nathalia@labenu','Operations');
    INSERT INTO aula48_exercicio VALUES (15,'Amanda','amandaop@labenu','Operations');
    INSERT INTO aula48_exercicio VALUES (16,'Rebeca','rebeca@labenu','Operations');
    INSERT INTO aula48_exercicio VALUES (17,'Jean','jean@labenu','Operations');
    INSERT INTO aula48_exercicio VALUES (18,'Vitória','vitoria@labenu','Operations');
    INSERT INTO aula48_exercicio VALUES (19,'Fernanda','fernanda@labenu','Operations');
    INSERT INTO aula48_exercicio VALUES (20,'Tainah','tainah@labenu','Operations');
    INSERT INTO aula48_exercicio VALUES (21,'Aline','aline@labenu','CX');
    INSERT INTO aula48_exercicio VALUES (22,'Nathalia','nathaliacx@labenu','CX');
    INSERT INTO aula48_exercicio VALUES (23,'Layla','layla@labenu','CX');
    INSERT INTO aula48_exercicio VALUES (24,'Jonathan','jonathan@labenu','CX');
    INSERT INTO aula48_exercicio VALUES (25,'Maju','maju@labenu','CX');
`)
    

createTable().then(insertUsers)