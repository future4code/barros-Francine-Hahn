import React from 'react'
import { FormDadosGerais } from '../style'

export function EnsinoSuperior(props) {
    const handleClick = (e) => {
        e.preventDefault()
        props.estadoAtualizado(true)
    }
    return (
        <FormDadosGerais>
            <input type='text' placeholder='Qual o curso?'/>
            <input type='number' placeholder='Qual a anuidade de ensino?'/>
            <button onClick={e => handleClick(e)}>Enviar</button>
        </FormDadosGerais>
    )
}