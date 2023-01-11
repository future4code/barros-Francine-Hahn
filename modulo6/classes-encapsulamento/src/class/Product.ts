export default class Poduct {
    private id: string
    private name: string
    private price: number

    constructor(id: string, n: string, p: number){
        this.id = id
        this.name = n
        this.price = p
    }

    public getPoductId() {
        return this.id
    }

    public getPoductName() {
        return this.name
    }

    public getPoductPrice() {
        return this.price
    }

    public setPoductId(newProductId: string) {
        this.id = newProductId
    }

    public setPoductName(newProductName: string) {
        this.name = newProductName
    }

    public setPoductPrice(newProductPrice: number) {
        this.price = newProductPrice
    }
}