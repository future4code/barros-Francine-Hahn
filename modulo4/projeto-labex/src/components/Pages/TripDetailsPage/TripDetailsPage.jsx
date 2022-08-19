import React, {useContext} from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { useRequestData } from "../../../hooks/useRequestData";
import { urlBase } from "../../../constants/urlBase";
import {Header} from '../../Header/Header'
import {ApplicantsCard} from '../../ApplicantsCard/ApplicantsCard'
import {DetailsSection, PendingCandidates, ApprovedCandidates, Loading} from './style'
import { AuthContext } from "../../../contexts/AuthContext";
import loading from '../../../img/loading.png'
import launch3 from '../../../img/launch3.jpg'


export function TripDetailsPage() {
    useProtectedPage()
    const {details} = useContext(AuthContext)
    const pathParams = useParams()
    const tripName = pathParams.details
    const navigate = useNavigate()


    //requisição dos detalhes da viagem
    const [data, isLoading, error] = useRequestData(`${urlBase}trip/${details}`, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })


    //Aprovar candidato
    const handleApprove = (candidateId) => {
        const body = {
            approve: true
        }
        axios.put(`${urlBase}trips/${details}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(alert('Candidato aprovado!')).catch((err) => alert(`Houve um erro: ${err}`))
    }
    

    //Reprovar candidato
    const handleDisapprove = (candidateId) => {
        const body = {
            approve: false
        }
        axios.put(`${urlBase}trips/${details}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(alert('Candidato reprovado!')).catch((err) => alert(`Houve um erro: ${err}`))
    }

    return (
        <DetailsSection background={launch3}>
            <Header/>
            {isLoading && <Loading src={loading} alt={'Ícone de um círculo rodando'}/>}
            {!isLoading && data && (
            <>
                <section>
                    <button onClick={() => navigate(-1)}>Voltar</button>
                    <section>
                        <h1>{tripName}</h1>
                        <p>DESCRIÇÃO: {data.trip.description}</p>
                        <p>PLANETA: {data.trip.planet}</p>
                        <p>DURAÇÃO: {data.trip.durationInDays}</p>
                        <p>DATA: {data.trip.date}</p>
                    </section>

                    <h2>Candidatos pendentes</h2>
                    
                    <PendingCandidates>
                        {data.trip.candidates && data.trip.candidates.map(item => {
                            return (
                                <ApplicantsCard
                                    key={item.id}
                                    name={item.name}
                                    profession={item.profession}
                                    age={item.age}
                                    country={item.country}
                                    text={item.applicationText}
                                    handleApprove={() => handleApprove(item.id)}
                                    handleDisapprove={() => handleDisapprove(item.id)}
                                />
                            )
                        })}
                    </PendingCandidates>
                    
                    <ApprovedCandidates>
                        <h2>Candidatos aprovados</h2>
                        <ul>
                            {data.trip.approved && data.trip.approved.map(item => {
                                return <li key={item.id}>{item.name}</li>
                            })}
                        </ul>
                    </ApprovedCandidates>
                </section>
            </>
            )}
            {!isLoading && !data && <p>{error}</p>}
        </DetailsSection>
    )
}