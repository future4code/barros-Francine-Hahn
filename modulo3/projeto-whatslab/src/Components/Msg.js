import React from 'react';
import {ContainerMsg, MsgOutrosUsuarios} from '../style'


export function Msg(props) {
    return (
        <>
            {props.nome !== 'eu' && (
                <MsgOutrosUsuarios>
                    <button onClick={props.remove}>x</button>
                    <p>{props.nome}</p>
                    <p>{props.mensagem}</p>
                </MsgOutrosUsuarios>
            )}
            
            {props.nome === 'eu' && (
                <ContainerMsg>
                    <button onClick={props.remove}>x</button>
                    <p>{props.mensagem}</p>
                </ContainerMsg>

            )}
        </>
    )
}