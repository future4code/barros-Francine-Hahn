import React from 'react'
import axios from 'axios'
import {CardMatches, ContainerMatches, NoMatches, DeleteButton} from './style'
import iconBrobekHeart from '../../img/icon-broken-heart.png'
import iconDelete from '../../img/iconDelete.png'


export function Matches(props) {

    //Limpar matches e perfis vistos
    const handleClear = () => {
        const conf = confirm('Tem certeza que quer excluir os seus matches?')
        if(conf === true) {
            axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/clear').
            then(alert('Seus matches foram excluidos')).catch(err => console.log(err))
        }
    }
    
    
    return (
        <section>
            {props.matches.length === 0 && (
            <NoMatches>
                <p>Você ainda não possui matches.</p>
                <img src={iconBrobekHeart}/>
            </NoMatches>)}
            
            {props.matches.length > 0 && (
                <ContainerMatches>
                    <section>
                        {props.matches.map((item, index) => {
                            return (
                                <CardMatches key={index}>
                                    <img src={item.photo} alt={item.photo_alt}/>
                                    <p>{item.name}</p>
                                </CardMatches>
                            )
                        })}
                    </section>
                    <DeleteButton onClick={handleClear}>
                        <img src={iconDelete} alt={'Ícone de uma lixeira'}/>
                    </DeleteButton>
                </ContainerMatches>
            )}
        </section>
    )
}