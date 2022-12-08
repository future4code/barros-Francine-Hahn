import BaseDatabase from "./BaseDatabase"
import { TABLE_USERS } from "./tableNames"


export default class UserDatabase extends BaseDatabase {
    private TABLE_USERS = TABLE_USERS
    
    public async getAllUsers () {
        const result = await BaseDatabase.connection.raw(`
            SELECT * FROM ${this.TABLE_USERS};
        `)
        return result[0]
    }
    
    public async createUser (id: string, email: string, password: string) {
        await BaseDatabase.connection.raw(`
            INSERT INTO ${this.TABLE_USERS} VALUES ('${id}', '${email}', '${password}');
        `)
    }
    
    public async getUserById (id: string) {
        const result = await BaseDatabase.connection.raw(`
            SELECT * FROM ${this.TABLE_USERS} WHERE id = '${id}';
        `)
        return result[0]
    }
}