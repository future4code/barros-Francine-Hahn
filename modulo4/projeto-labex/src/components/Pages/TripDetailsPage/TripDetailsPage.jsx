import React from "react";
import {useParams, useNavigate} from 'react-router-dom'
import {Header} from '../../Header/Header'
import {DetailsSection} from './style'


export function TripDetailsPage() {
    
    const pathParams = useParams()
    const trip = pathParams.details

    const navigate = useNavigate()
    
    return (
        <DetailsSection>
            <Header/>
            <section>
                <h1>{trip === 'viagem1'? 'Viagem 1' : 'Viagem 2'}</h1>
            </section>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </DetailsSection>
    )
}