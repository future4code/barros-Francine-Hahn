import React from "react";
import {Header} from '../../Header/Header'
import {ApplicationSection} from './style'
import {useNavigate} from 'react-router-dom'


export function ApplicationPage() {
    const navigate = useNavigate()
    
    const handleForm = () => {
        alert('Sua inscrição foi enviada com sucesso!')
    }

    return (
        <ApplicationSection>
            <Header/>
            <section>
                <h1>Inscreva-se para uma viagem</h1>
                <form>
                    <input placeholder="nome"/>
                    <input placeholder="idade"/>
                    <input placeholder="profissão"/>
                </form>
                <aside>
                    <button onClick={() => navigate("/")}>Voltar</button>
                    <button onClick={handleForm}>Enviar</button>
                </aside>
            </section>
        </ApplicationSection>
    )
}