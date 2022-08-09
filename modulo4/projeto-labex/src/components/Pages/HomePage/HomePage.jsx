import React from "react";
import {Header} from '../../Header/Header'
import { ListTrips } from "../../ListTrips/ListTrips";
import {HomeSection} from './style'


export function HomePage() {
    
    return (
        <section>
            <Header/>
            <HomeSection>
                <h1>Home</h1>
                <ListTrips/>
            </HomeSection>
        </section>
    )
}