import React from 'react';

export const Form = (props) => {
    return (
        <form action='#'>
            <label for={'remetente'}>{props.label1}:</label>
            <input type={'text'} id={'remetente'} name={'remetente'} value={''}/>

            <label for={'msg'}>{props.label2}:</label>
            <input type={'text'} id={'msg'} name={'msg'} value={''}/>

            <button>Enviar mensagem</button>
        </form>
    )
}