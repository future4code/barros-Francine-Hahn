export default class Purchase {
    private id: string
    private userId: string
    private productId: string
    private quantity: number
    private totalPrice: number

    constructor(id: string, ui: string, pi: string, q: number, tp: number){
        this.id = id
        this.userId = ui
        this.productId = pi
        this.quantity = q
        this.totalPrice = tp
    }

    public getPurchaseId() {
        return this.id
    }

    public getUserId() {
        return this.userId
    }

    public getPoductId() {
        return this.productId
    }

    public getQuantity() {
        return this.quantity
    }

    public getTotalPrice() {
        return this.totalPrice
    }

    public setPurchaseId(newPurchaseId: string) {
        this.id = newPurchaseId
    }

    public setUserId(newPurchaseUserId: string) {
        this.userId = newPurchaseUserId
    }

    public setPoductId(newPurchasePoductId: string) {
        this.productId = newPurchasePoductId
    }

    public setQuantity(newPurchaseQuantity: number) {
        this.quantity = newPurchaseQuantity
    }

    public setTotalPrice(newPurchaseTotalPrice: number) {
        this.totalPrice = newPurchaseTotalPrice
    }
}