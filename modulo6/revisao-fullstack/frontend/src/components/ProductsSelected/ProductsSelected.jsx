import React from "react"
import { Container } from "./style"


export function ProductsSelected (props) {
   
    const handleRemoveProduct = () => {
        const productsInCart = JSON.parse(localStorage.getItem("products"))
        const filterProducts = productsInCart.filter(item => item.product !== props.name)
        localStorage.setItem("products", JSON.stringify(filterProducts))
    }
   
    return (
        <Container>
            <p>{props.name}</p>
            <p>{props.qty}x</p>
            <p>R${props.price}</p>
            <button onClick={handleRemoveProduct}>Remover</button>
        </Container>
    )
}