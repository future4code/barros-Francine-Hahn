import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Card, Photo, ButtonSection, MatchTitle} from './style'
import iconx from '../../img/icon-x.png'
import iconheart from '../../img/iconheart.png'


export function ProfileCard() {

    const [user, setUser] = useState([])
    const [isMatch, setIsMatch] = useState(false)

    //Escolher perfil toda vez que clica no like ou deslike
    const chooseProfile = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/person').then(response => {
            if(response.data.profile === null) {
                axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/clear`).then(
                    alert('Atenção: Você vizualisou todos os perfis disponíveis e por isso seus matches serão resetados.')
                ).catch(err => console.log(err))
            } else {
                setUser(response.data.profile)
            } 
        }).catch(err => console.log(err))
    }


    useEffect(() => {chooseProfile()}, [])
   

    //Quando usuário clica no deslike
    const handleDeslike = () => {
        const body = {
            id: user.id,
            choice: false
        }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/choose-person',
        body).then(() => {
            setIsMatch(false)
            chooseProfile()
        }).
        catch(err => console.log(err))
    }


    //Quando usuário clica no like
    const handleLike = () => {
        const body = {
            id: user.id,
            choice: true
        }
        
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/choose-person',
        body).then(response => {
            if (response.data.isMatch === true) {
                setIsMatch(true)
            } else {
                setIsMatch(false)
            }
            chooseProfile()
        }).catch(err => console.log(err))
    }


    return (
        <Card>
            {isMatch && <MatchTitle>It's a match!!</MatchTitle>}
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