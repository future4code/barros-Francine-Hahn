import React from "react";
import {useNavigate} from 'react-router-dom'
import {Header} from '../../Header/Header'
import {CreateTripSection} from './style'


export function CreateTripPage() {
    
    const navigate = useNavigate()
    
    return (
        <CreateTripSection>
            <Header/>
            <h1>Criar Viagem</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </CreateTripSection>
    )
}