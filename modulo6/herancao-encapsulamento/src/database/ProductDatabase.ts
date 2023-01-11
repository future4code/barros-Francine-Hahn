import BaseDatabase from "./BaseDatabase"
import { TABLE_PRODUCTS } from "./tableNames"


export default class ProductDatabase extends BaseDatabase {
    private TABLE = TABLE_PRODUCTS

    public async insertProduct (id: string, name: string, price: number) {
        await BaseDatabase.connection.raw(`
            INSERT INTO ${this.TABLE} VALUES ('${id}', '${name}', ${price});
        `)
    }

    public async getAllProducts () {
        const result = await BaseDatabase.connection.raw(`
            SELECT * FROM ${this.TABLE};
        `)

        return result[0]
    }

    public async getProductById (id: string) {
        const result = await BaseDatabase.connection.raw(`
            SELECT * FROM ${this.TABLE} WHERE id = '${id}';
        `)
        return result[0]
    }
}