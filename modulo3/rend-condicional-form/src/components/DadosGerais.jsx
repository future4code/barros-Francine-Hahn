import React, {useState} from 'react'
import {FormDadosGerais} from '../style'
import {EnsinoMedio} from './EnsinoMedio'
import {EnsinoSuperior} from './EnsinoSuperior'



export function DadosGerais(props) {
    const [estado, setEstado] = useState('')

    return (
        <div>
            <FormDadosGerais>
                <h1>Preencha os dados abaixo:</h1>
                <input type='text' placeholder='Nome'/>
                <input type='number' placeholder='Idade'/>
                <input type='email' placeholder='E-mail'/>
                <label for='escolaridade'>Qual o grau de escolaridade?</label>
                <select name='escolaridade' id='escolaridade' value={estado} onChange={e => setEstado(e.target.value)}>
                    <option value='emi'>Ensino Médio Incompleto</option>
                    <option value='emc'>Ensino Médio Completo</option>
                    <option value='esi'>Ensino Superior Incompleto</option>
                    <option value='esc'>Ensino Superior Completo</option>
                </select>
            </FormDadosGerais>
            {(estado === 'emi' || estado === 'emc')? <EnsinoMedio estadoAtualizado={props.setPaginaAgradecimento}/> : <EnsinoSuperior estadoAtualizado={props.setPaginaAgradecimento}/>}
        </div>
    )
}