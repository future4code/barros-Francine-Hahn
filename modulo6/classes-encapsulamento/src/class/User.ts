export default class User {
    private id: string
    private email: string
    private password: string

    constructor(id: string, e: string, p: string){
        this.id = id
        this.email = e
        this.password = p
    }

    public getUserId() {
        return this.id
    }

    public getUserEmail() {
        return this.email
    }

    public getUserPassword() {
        return this.password
    }

    public setUserId(newUserId: string) {
        this.id = newUserId
    }

    public setUserEmail(newUserEmail: string) {
        this.email = newUserEmail
    }

    public setUserPassword(newUserPassword: string) {
        this.password = newUserPassword
    }
}