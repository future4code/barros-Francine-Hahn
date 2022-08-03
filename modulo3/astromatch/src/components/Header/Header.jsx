import React from 'react'
import axios from 'axios'
import {HeaderSection} from './style'
import icon from '../../img/match-icon.png'

export function Header(props) {

    const handleMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/matches').then(
        response => props.setMatches(response.data.matches)
        ).catch(err => console.log(err))
        return props.setShowMatches(true)
    }

    return (
        <HeaderSection>
            <button onClick={handleMatches}>
                <img src={icon} alt={'ícone de match entre duas pessoas'}/>
            </button>

            <div>
                <h1>astro</h1>
                <h1>match</h1>
            </div>
        </HeaderSection>
    )
}