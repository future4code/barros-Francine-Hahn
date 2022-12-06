import { Knex } from "knex"
import Product from "./Product"

export default class ProductDatabase {

    constructor(private connection: Knex){
        this.connection = connection
    }

    public async insertPoduct(newProduct: Product) {
        await this.connection("Labe_Products").insert(newProduct)
    }

    public async getPoducts() {
        const result = await this.connection("Labe_Products").select()
        return result
    }
}