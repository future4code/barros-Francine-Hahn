import React from "react";
import { urlBase } from "../../../hooks/urlBase";
import { Header } from "../../Header/Header";
import { BiggerContainer, SmallerContainer, ListTrips, Loading } from "./style";
import {useRequestData} from '../../../hooks/useRequestData'


export function ListTripsPage() {
    
    const [data, isLoading, error] = useRequestData(`${urlBase}trips`)

    const renderTrips = data && data.trips && data.trips.map(item => {
        return (
            <ListTrips key={item.id}>
                <h2>{item.name}</h2>
                <h3>{item.planet}</h3>
                <p>{item.description}</p>
                <p>Duração: {item.durationInDays} dias</p>
                <p>Data de embarque: {item.date}</p>
            </ListTrips>
        )
    })

    return (
        <BiggerContainer>
            <Header/>
            <h1>Lista de viagens</h1>
            {isLoading && <Loading>Carregando....</Loading>}

            <SmallerContainer>
                {!isLoading && data && renderTrips}
            </SmallerContainer>

            {!isLoading && !data && error}
        </BiggerContainer>
    )
}