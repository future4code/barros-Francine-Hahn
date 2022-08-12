import React from "react";
import { useNavigate } from "react-router-dom";
import {Header} from '../../Header/Header'
import {HomeSection} from './style'


export function HomePage() {
    const navigate = useNavigate()

    return (
        <section>
            <Header/>
            <HomeSection>
                <section>
                    <h2>Acessar área privatida do site</h2>
                    <button onClick={() => navigate('/login')}>Painel do admin</button>
                </section>
                <section>
                    <h2>Acessar a lista de viagens disponíveis</h2>
                    <button onClick={() => navigate('/lista-de-viagens')}>Lista de viagens</button>
                </section>
            </HomeSection>
        </section>
    )
}