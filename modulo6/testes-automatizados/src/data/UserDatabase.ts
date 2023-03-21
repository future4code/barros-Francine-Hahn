import { BaseDatabase } from "./BaseDatabase"


export class UserDatabase extends BaseDatabase {
    TABLE = "labook_users"

    getUserBy = async (column: string, value: string): Promise<any> => {
        try {
            const result = await BaseDatabase.connection(this.TABLE).select().where(column, value)
            return result[0]

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    

    destroyConnection = async (): Promise<void> => {
        try {
            await BaseDatabase.connection.destroy()
        
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}