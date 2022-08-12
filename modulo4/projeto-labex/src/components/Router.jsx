import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdmPage } from "./Pages/AdmPage/AdmPage";
import { CreateTripPage } from "./Pages/CreateTripPage/CreateTripPage";
import {HomePage} from './Pages/HomePage/HomePage';
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { ApplicationPage } from "./Pages/ApplicationPage/ApplicationPage";
import { TripDetailsPage } from "./Pages/TripDetailsPage/TripDetailsPage";
import { ListTripsPage } from "./Pages/ListTripsPage/ListTripsPage";


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/agendar-viagem" element={<ApplicationPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/admin" element={<AdmPage/>}/>
                <Route path="/criar-viagem" element={<CreateTripPage/>}/>
                <Route path="/lista-de-viagens" element={<ListTripsPage/>}/>
                <Route path="/detalhes-da-viagem/:details" element={<TripDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}