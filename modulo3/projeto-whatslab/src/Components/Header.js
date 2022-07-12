import React from 'react'
import {Cabecalho} from '../style'

export function Header(props) {
    return (
        <Cabecalho>
            <div>
                <img src={props.iconeDoGrupo}/>
                <h3>{props.nomeDoGrupo}</h3>
            </div>
            <div>
                <img src={props.iconeCelular}/>
                <img src={props.iconeCamera}/>
            </div>
        </Cabecalho>
    )
}