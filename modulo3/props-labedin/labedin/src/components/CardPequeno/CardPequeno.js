import React from "react";
import './CardPequeno.css';

function CardPequeno (props) {
    return (
        <div class="containerMaior">
            <img src={props.icone}/>
            <div class="containerMenor">
                <p><strong>E-mail:</strong> {props.email}</p>
                <p><strong>Endereço:</strong> {props.endereco}</p>
            </div>
        </div>
    )
}

export default CardPequeno;