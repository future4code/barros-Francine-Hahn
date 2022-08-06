import React, { useState } from "react";
import axios from 'axios';
import {Formulario} from '../style'


export function CreateUser() {

    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")

    
    //Função que está no onClick do botão CRIAR USUÁRIO
    const handleCreateUser = () => {
        const body = {
            name: inputName,
            email: inputEmail
        }
        
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: 'francine-hahn-barros'
            }
        }).then(alert(`Usuário ${inputName} criado com sucesso!`)).catch(error => alert(error.response.data))
    }

    
    return (
        <Formulario>
            <input type="text" value={inputName} placeholder={"Nome"} onChange={e => setInputName(e.target.value)}/>
            <input type="email" value={inputEmail} placeholder={"E-mail"} onChange={e => setInputEmail(e.target.value)}/>
            <button onClick={handleCreateUser}>Criar usuário</button>
        </Formulario>
    )
}