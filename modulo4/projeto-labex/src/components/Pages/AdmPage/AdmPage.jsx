import React, {useContext} from "react";
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
import axios from "axios";


export function AdmPage() {
    useProtectedPage()
    const navigate = useNavigate()
    const [data, isLoading, error, updateData, setUpdateData] = useRequestData(`${urlBase}trips`)
    const {setDetails} = useContext(AuthContext)
    

    const handleTripDetail = (item) => {
        setDetails(item.id)
        navigate(`/detalhes-da-viagem/${item.name}`)
    }

    const handleRemoveTrip = (item) => {
        axios.delete(`${urlBase}trips/${item.id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(() => {
            alert('Viagem excluída com sucesso!')
            setUpdateData(!updateData)
        }).catch(err => `Houve um erro: ${err}`)
    }
    
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
                <ListTripsSection>
                    {isLoading && <Loading src={loading} alt={'Ícone de um círculo rodando'}/>}
                    {!isLoading && data && trips}
                    {!isLoading && !data && error}
                </ListTripsSection>
            </AdminSection>
        </BiggerContainer>
    )
}