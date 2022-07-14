import React from 'react'
import { FormDadosGerais } from '../style'

export function EnsinoMedio(props) {
    const handleClick = (e) => {
        e.preventDefault()
        props.estadoAtualizado(true)
    }

    return (
        <FormDadosGerais>
            <input type='text' placeholder='Por que você não terminou um curso de graduação?'/>
            <label>Você fez algum curso complementar?</label>
            <select>
                <option>Curso técnico</option>
                <option>Cursos de inglês</option>
                <option>Não fiz curso complementar</option>
            </select>
            <button onClick={e => handleClick(e)}>Enviar</button>
        </FormDadosGerais>
    )
}