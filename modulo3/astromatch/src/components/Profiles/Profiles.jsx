import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Photo, Card, ButtonSection} from './style'
import iconx from '../../img/icon-x.png'
import iconheart from '../../img/iconheart.png'


export function Profiles() {

    const [user, setUser] = useState([])


    useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine/person').then(
        response => setUser(response.data.profile)
        ).catch(err => console.log(err.response))
    }, [])
    
   
    const handleDeslike = () => {
        const body = {
            'id': user.id,
            'choice': false
        }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/choose-person',
        body).then(() => console.log("It's NOT a match!")).catch(err => console.log(err))
        
        
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/person').then(
        response => setUser(response.data.profile)
        ).catch(err => console.log(err))
    }

    const handleLike = () => {
        const body = {
            'id': user.id,
            'choice': true
        }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/choose-person',
        body).then((response) => response.data.isMatch === true && alert("It's a match!")).catch(err => console.log(err))

        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/person').then(
        response => setUser(response.data.profile)
        ).catch(err => console.log(err.response))
    }


    return (
        <Card>
            <Photo src={user.photo} alt={user.photo_alt}/>
            <h3>{user.name}, {user.age}</h3>
            <p>{user.bio}</p>
        
            <ButtonSection>
                <button onClick={handleDeslike}>
                    <img src={iconx} alt={'Ícone com um x representasndo um deslike'}/>
                </button>
                <button onClick={handleLike}>
                    <img src={iconheart} alt={'Ícone com um coração representando um like'}/>
                </button>
            </ButtonSection>
        </Card>
    )
}