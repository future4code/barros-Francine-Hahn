import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Card, Photo, ButtonSection} from './style'
import iconx from '../../img/icon-x.png'
import iconheart from '../../img/iconheart.png'


export function ProfileCard() {

    const [user, setUser] = useState([])

    //Escolher perfil toda vez que clica no like ou deslike
    const chooseProfile = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/person').then(
        response => setUser(response.data.profile)
        ).catch(err => console.log(err))
    }


    useEffect(() => {chooseProfile()}, [])
   

    //Quando usuário clica no like
    const handleDeslike = () => {
        const body = {
            id: user.id,
            choice: false
        }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/choose-person',
        body).then(chooseProfile()).catch(err => console.log(err))
    }


    //Quando usuário clica no deslike
    const handleLike = () => {
        const body = {
            id: user.id,
            choice: true
        }
        
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/choose-person',
        body).then(chooseProfile()).catch(err => console.log(err))
    }

    return (
        <Card>
            <Photo src={user.photo} alt={user.photo_alt}/>
            <section>
                <h3>{user.name}, {user.age}</h3>
                <p>{user.bio}</p>
            </section>
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