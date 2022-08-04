import React, {useState} from 'react'
import axios from 'axios'
import {HeaderSection} from './style'
import iconPeople from '../../img/match-icon.png'
import iconArrow from '../../img/icon-arrow.png'


export function Header(props) {
    

    //Pegar a lista de matches
    const handleMatches = () => {
        props.setShowMatches(true)

        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/matches').then
        (response => props.setMatches(response.data.matches)).catch(err => console.log(err))
    }


    //Voltar para a página principal
    const handlePageChange = () => {
        props.setShowMatches(false)
    }


    return (
        <HeaderSection>
            {props.showMatches? (
                <button onClick={handlePageChange}>
                    <img src={iconArrow} alt={'ícone de uma seta'}/>
                </button>
            ) : (
                <button onClick={handleMatches}>
                    <img src={iconPeople} alt={'ícone de match entre duas pessoas'}/>
                </button>
            )}

            <div>
                <h1>astro</h1>
                <h1>match</h1>
            </div>
        </HeaderSection>
    )
}