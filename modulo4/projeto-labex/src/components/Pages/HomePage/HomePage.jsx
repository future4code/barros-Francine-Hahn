import React from "react";
import { useNavigate } from "react-router-dom";
import {Header} from '../../Header/Header'
import {BiggerContainer, HomeSection} from './style'
import launch from '../../../img/launch.jpg'


export function HomePage() {
    const navigate = useNavigate()

    return (
        <BiggerContainer background={launch}>
            <Header/>
            <HomeSection>
                <section>
                    <h2>FAZER LOGIN</h2>
                    <button onClick={() => navigate('/login')}>Login</button>
                </section>
                <section>
                    <h2>LISTA DE VIAGENS</h2>
                    <button onClick={() => navigate('/lista-de-viagens')}>Viagens</button>
                </section>
            </HomeSection>
        </BiggerContainer>
    )
}