import React from 'react'
import axios from 'axios'
import {CardMatches, ContainerMatches, NoMatches} from './style'
import iconBrobekHeart from '../../img/icon-broken-heart.png'


export function Matches(props) {

    //Limpar matches e perfis vistos
    const handleClear = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/clear').then(
          response => alert('Seus matches foram excluídos')
        ).catch(err => console.log(err))
    }
    
    
    return (
        <ContainerMatches>
            {props.matches.length === 0 && (
            <NoMatches>
                <p>Você ainda não possui matches.</p>
                <img src={iconBrobekHeart}/>
            </NoMatches>)}
            
            {props.matches.length > 0 && (
                <div>
                    {props.matches.map((item, index) => {
                        return (
                            <CardMatches key={index}>
                                <img src={item.photo} alt={item.photo_alt}/>
                                <p>{item.name}</p>
                            </CardMatches>
                        )
                    })}
                </div>
            )}

            <button onClick={handleClear}>Limpar matches</button>
        </ContainerMatches>
    )
}