import React from "react";
import {useNavigate} from 'react-router-dom'
import {Header} from '../../Header/Header'
import {AdminSection, ListTripsSection} from './style'



export function AdmPage() {

    const navigate = useNavigate()

    return (
        <AdminSection>
            <Header/>
            <h1>Adm Page</h1>
            <button onClick={() => navigate("/criar-viagem")}>Criar viagem</button>
            <ListTripsSection>
                <button onClick={() => navigate("/detalhes-da-viagem/viagem1")}>Viagem 1</button>
                <button onClick={() => navigate("/detalhes-da-viagem/viagem2")}>Viagem 2</button>
            </ListTripsSection>
        </AdminSection>
    )
}