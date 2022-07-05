import React from 'react'
import {ContainerBotoes, Botao} from '../../style'

export function SecaoCompartilhar(props) {
    return (
        <ContainerBotoes>
            <Botao onClick={props.aoClicarInstagram}>Instagram</Botao>
            <Botao onClick={props.aoClicarFacebook}>Facebook</Botao>
            <Botao onClick={props.aoClicarTwitter}>Twitter</Botao>
        </ContainerBotoes>
    )
}