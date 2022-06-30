import React from 'react'
import './style.css'
import { useState } from 'react'

export function SecaoCompartilhar(props) {
    return (
        <div className="container-botoes">
            <button className="botao" onClick={props.aoClicarInstagram}>Instagram</button>
            <button className="botao" onClick={props.aoClicarFacebook}>Facebook</button>
            <button className="botao" onClick={props.aoClicarTwitter}>Twitter</button>
        </div>
    )
}