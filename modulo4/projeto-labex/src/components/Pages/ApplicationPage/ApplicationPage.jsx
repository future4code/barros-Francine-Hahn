import React, { useState } from "react";
import axios from 'axios'
import { urlBase } from "../../../hooks/urlBase";
import {Header} from '../../Header/Header'
import {ApplicationSection, Loading} from './style'
import {useNavigate} from 'react-router-dom'
import { useRequestData } from "../../../hooks/useRequestData";



export function ApplicationPage() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [text, setText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")
    

    const [data, loading, error] = useRequestData(`${urlBase}trips`)
    const listTrips = data && data.trips && data.trips.map(item => {
        return <option key={item.id} value={item.name}>{item.name}</option>
    })


    //Quando usuário envia o formulário
    const handleForm = () => {
        const body = {
            name: name,
            age: age,
            applicationText: text,
            profession: profession,
            country: country
        }

        setIsLoading(true)

        axios.post(`${urlBase}trips/NoIFVcOiSgTKTIPVZwXS/apply`, body).then(() => {
            setIsLoading(false)
            alert("Sua inscrição foi concluída com sucesso!")
        }).catch(err => {
            setIsLoading(false)
            alert(`Ocorreu um erro: ${err}`)
        })

        setName("")
        setAge("")
        setText("")
        setProfession("")
        setCountry("")

    }

    return (
        <ApplicationSection>
            <Header/>
            <section>
                <h1>Inscreva-se para uma viagem</h1>
                <form>
                    <select name="trip" id="trip">
                        <option>Escolha uma viagem</option>
                        {listTrips}
                    </select>
                    <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="number" placeholder="Idade" value={age} onChange={(e) => setAge(e.target.value)}/>
                    <input type="text" placeholder="Por que você um um(a) bom/boa candidato(a)?" value={text} onChange={(e) => setText(e.target.value)}/>
                    <input type="text" placeholder="Profissão" value={profession} onChange={(e) => setProfession(e.target.value)}/>
                    <input type="text" placeholder="País" value={country} onChange={(e) => setCountry(e.target.value)}/>
                </form>
                <aside>
                    <button onClick={() => navigate("/")}>Voltar</button>
                    <button onClick={handleForm}>Enviar</button>
                </aside>
                {isLoading && <Loading>Carregando...</Loading>}
            </section>

        </ApplicationSection>
    )
}