import React, {useContext, useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {Header} from '../../Header/Header'
import {BiggerContainer, AdminSection, ListTripsSection, ButtonSection, Loading} from './style'
import launch3 from '../../../img/launch3.jpg'
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { urlBase } from "../../../constants/urlBase";
import { useRequestData } from "../../../hooks/useRequestData";
import loading from '../../../img/loading.png'
import iconDelete from '../../../img/iconDelete.png'
import { AuthContext } from "../../../contexts/AuthContext";


export function AdmPage() {
    useProtectedPage()
    const [loadingData, setLoadingData] = useState(false)
    const navigate = useNavigate()
    const [data, isLoading, error, updateData, setUpdateData] = useRequestData(`${urlBase}trips`)
    const {setDetails} = useContext(AuthContext)
    
    //Getting the id of the trip
    const handleTripDetail = (item) => {
        setDetails(item.id)
        navigate(`/detalhes-da-viagem/${item.name}`)
    }

    //Removing the trip
    const handleRemoveTrip = (item) => {
        setLoadingData(true)
        axios.delete(`${urlBase}trips/${item.id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(() => {
            setLoadingData(false)
            alert('Viagem excluída com sucesso!')
            setUpdateData(!updateData)
        }).catch(err => {
            setloadingData(false)
            `Houve um erro: ${err}`
        })
    }
    
    //Rendering the trips' list
    const trips = data && data.trips && data.trips.map(item => {
        return (
            <ButtonSection key={item.id}>
                <button onClick={() => handleTripDetail(item)}>{item.name}</button>
                <button onClick={() => handleRemoveTrip(item)}>
                    <img src={iconDelete} alt={'ícone de um lixo'}/>
                </button>
            </ButtonSection>
        )
    })

    return (
        <BiggerContainer background={launch3}>
            <Header/>
            <AdminSection>
                <h1>Bem vindo(a) ao painel administrativo</h1>
                <button onClick={() => navigate("/criar-viagem")}>Criar viagem</button>
                {isLoading && <Loading src={loading} alt={'Ícone de um círculo rodando'}/>}
                
                {!isLoading && data && (
                    <ListTripsSection>
                        {trips}
                        {loadingData && <Loading src={loading} alt={'Ícone de um círculo rodando'}/>}
                    </ListTripsSection>
                )}

                {!isLoading && error && (
                    <>
                        <p>Houve um erro:</p>
                        <p>{error}</p>
                    </>
                )}
            </AdminSection>
        </BiggerContainer>
    )
}