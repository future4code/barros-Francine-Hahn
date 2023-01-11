import React, { useEffect, useState } from "react"
import { Container } from "./style"
import { validateName } from "../../constants/constants"
import { ProductsSelected } from "../ProductsSelected/ProductsSelected"
import { useNavigate } from "react-router-dom"


export function Form () {
    const [clientName, setClientName] = useState("")
    const [product, setProduct] = useState("")
    const [qty, setQty] = useState("")
    const [price, setPrice] = useState(20)
    const [deliveryDate, setDeliveryDate] = useState("")
    const [clientNameErrorMessage, setClientNameErrorMessage] = useState("")
    const [reload, setReload] = useState(false)
    let productsInCart = JSON.parse(localStorage.getItem("products"))
    const navigate = useNavigate()


    useEffect(() => {
        productsInCart = JSON.parse(localStorage.getItem("products"))
    }, [reload])

    const handleSubmitName = (e) => {
        e.preventDefault()

        if (validateName(clientName)) {
            localStorage.setItem("products", JSON.stringify([]))
            localStorage.setItem("name", clientName)
            setReload(!reload)
        } else {
            setClientNameErrorMessage("Nome inválido. Digite nome e sobrenome.")
        }
    }

    const handleAddProduct = (e) => {
        e.preventDefault()
        setReload(!reload)
        
        if (productsInCart === null) {
            const products = [{product, qty, price}]
            localStorage.setItem("products", JSON.stringify(products))
        } else {
            const products = [...productsInCart, {product, qty, price}]
            localStorage.setItem("products", JSON.stringify(products))
        }
        
        setReload(!reload)
        setProduct("")
        setQty("")
    }

    const handleOrder = (e) => {
        e.preventDefault()
        localStorage.removeItem("products")
        localStorage.removeItem("name")
        navigate("/pedido-finalizado")
    }
    
    return (
        <Container>
            {productsInCart === null && (
                <>
                <section>
                    <label htmlFor="name">Nome do cliente</label>
                    <input type={'text'} value={clientName} id="name" list="clientData" onChange={e => setClientName(e.target.value)}/>
                    <datalist id="clientData">
                        <option>Francine Hahn</option>
                        <option>Mariana Boeira</option>
                        <option>Daniela Angeli</option>
                    </datalist>
                    <button onClick={handleSubmitName}>Entrar</button>
                </section>

                <span>{clientNameErrorMessage}</span>
                </>
            )}

            {productsInCart !== null && productsInCart.length > 0 && (
                <>
                    <h3>Produtos selecionados</h3>
                    {productsInCart.map((item, index) => {
                        return <ProductsSelected key={index} name={item.product} qty={item.qty} price={item.price}/>
                    })}
                </>
            )}

            {productsInCart && <h3>Cliente: {localStorage.getItem("name")}</h3>}

            {productsInCart !== null && (
                <section>
                    <label htmlFor="product">Produto</label>
                    <input type={'text'} value={product} id="product" list="productData" onChange={e => setProduct(e.target.value)}/>
                    <datalist id="productData">
                        <option>Maçã</option>
                        <option>Banana</option>
                        <option>Uva</option>
                    </datalist>

                    <label htmlFor="qty">Quantidade</label>
                    <input type={'number'} value={qty} id="qty" onChange={e => setQty(e.target.value)}/>
                    
                    <p>R$ 500,00</p>

                    <button onClick={handleAddProduct}>Adicionar</button>
                </section>
            )}

            {productsInCart !== null && productsInCart.length > 0 && (
                <section>
                    <label htmlFor="deliveryDate">Data de entrega</label>
                    <input type={'date'} value={deliveryDate} id="deliveryDate" onChange={e => setDeliveryDate(e.target.value)}/>
                    <button onClick={handleOrder}>Confirmar pedido</button>
                </section>
            )}
        </Container>
    )
}