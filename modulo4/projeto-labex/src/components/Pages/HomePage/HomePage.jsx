import React from "react";
import { useNavigate } from "react-router-dom";
import {Header} from '../../Header/Header'
import {Footer} from '../../Footer/Footer'
import {BiggerContainer, HomeSection} from './style'
import launch from '../../../img/launch.jpg'


export function HomePage() {
    const navigate = useNavigate()

    return (
        <BiggerContainer background={launch}>
            <Header/>
            <HomeSection>
                <section>
                    <section>
                        <h2>Área privativa do site</h2>
                        <button onClick={() => navigate('/login')}>Login</button>
                    </section>
                </section>
                <section>
                    <section>
                        <h2>Viagens disponíveis</h2>
                        <button onClick={() => navigate('/lista-de-viagens')}>Viagens</button>
                    </section>
                </section>
            </HomeSection>
            <div>
                <Footer/>
            </div>
        </BiggerContainer>
    )
}