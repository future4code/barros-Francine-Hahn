import React, {useEffect, useState} from "react"
import { Form } from "../../components/Form/Form"
import { Header } from "../../components/Header/Header"
import { ProductsSelected } from "../../components/ProductsSelected/ProductsSelected"
import { useRequestData } from "../../hooks/useRequestData"
import { Container } from "./style"


export function Home () {
    let productsInCart = JSON.parse(localStorage.getItem("products"))
    const [reload, setReload] = useState(false)
    const [stockData] = useRequestData('http://localhost:3003/products/stock')

    useEffect(() => {
        productsInCart = JSON.parse(localStorage.getItem("products"))
    }, [reload])


    //Function that increases or decreases the units of the product in the cart
    const handleChangeQty = (name, type) => {
        let updatedArray = []

        const getStock = stockData && stockData.filter(item => item.name === name)[0]      
        
        for (let product of productsInCart) {
            let newQty = 0
            if (type === "reduce" && product.qty > 1) {
                newQty = Number(product.qty) - 1 
            } else if (type === "increase" && getStock.qty_stock > product.qty) {
                newQty = Number(product.qty) + 1
            } else {
                newQty = product.qty
            }

            if (product.product === name) {
                updatedArray.push({
                    id: product.id,
                    product: product.product,
                    qty: newQty,
                    price: (product.price / product.qty) * newQty
                })
            } else {
                updatedArray.push(product)
            }
        }

        localStorage.setItem("products", JSON.stringify(updatedArray))

        setReload(!reload)
    }

    //Function that calculates the total price of the items added to cart
    const totalPrice = () => {
        let sum = 0
        for (let product of productsInCart) {
            sum += product.price
        }
        return sum.toFixed(2).replace(".", ",")
    }

    return (
        <>
            <Header/>

            <Container>
                {productsInCart !== null && productsInCart.length > 0 && (
                    <>
                        <h3>Produtos selecionados</h3>
                        {productsInCart.map((item, index) => {
                            return <ProductsSelected
                                key={index}
                                name={item.product}
                                qty={item.qty}
                                price={item.price}
                                handleReduceQty={() => handleChangeQty(item.product, "reduce")}
                                handleIncreaseQty={() => handleChangeQty(item.product, "increase")}
                                reload={reload}
                                setReload={setReload}
                            />
                        })}
                        <p id="totalPrice">TOTAL: R${totalPrice()}</p>
                    </>
                )}
            </Container>

            <Form reload={reload} setReload={setReload}/>
        </>
    )
}