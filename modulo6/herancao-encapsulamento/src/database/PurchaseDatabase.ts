import BaseDatabase from "./BaseDatabase";
import { TABLE_PURCHASES } from "./tableNames";
import { TABLE_PRODUCTS } from "./tableNames";
import { TABLE_USERS } from "./tableNames";

export default class PurchaseDatabase extends BaseDatabase {
    private table = TABLE_PURCHASES

    public async createPurchase (id: string, user_id: string, product_id: string, quantity: number, total_price: number) {
        await BaseDatabase.connection.raw(`
            INSERT INTO ${this.table} VALUES ('${id}', '${user_id}', '${product_id}', ${quantity}, ${total_price});
        `)
    }

    public async getUserPurchases (user_id: string) {
        const result = await BaseDatabase.connection.raw(`
            SELECT ${TABLE_PRODUCTS}.name, ${TABLE_PRODUCTS}.price, ${this.table}.quantity, ${this.table}.total_price
            FROM ${TABLE_USERS} LEFT JOIN ${this.table} ON ${TABLE_USERS}.id = ${this.table}.user_id JOIN ${TABLE_PRODUCTS}
            ON ${this.table}.product_id = ${TABLE_PRODUCTS}.id WHERE ${this.table}.user_id = ${user_id};
        `)
        return result[0]
    }
}