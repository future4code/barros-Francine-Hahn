import { Knex } from "knex"
import User from "./User"

export default class UserDatabase {

    constructor(private connection: Knex){
        this.connection = connection
    }

    public async insertUser(newUser: User) {
        await this.connection("Labe_Users").insert(newUser)
    }

    public async getUsers() {
        const result = await this.connection("Labe_Users").select()
        return result
    }
}