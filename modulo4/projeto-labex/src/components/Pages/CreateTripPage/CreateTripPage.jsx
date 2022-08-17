import React from "react";
import {useNavigate} from 'react-router-dom'
import { Footer } from "../../Footer/Footer";
import {Header} from '../../Header/Header'
import {CreateTripSection} from './style'
import { useForm } from "../../../hooks/useForm";
import stars from '../../../img/stars.png'


export function CreateTripPage() {
    const [form, onChange, clear] = useForm({id: "", name: "", planet: "", 	date: "", description: "", durationInDays: ""})
    const navigate = useNavigate()
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);


    const handleCreateTrip = (e) => {
        e.preventDefault()
        alert('Sua viagem foi criada com sucesso!')
    }


    return (
        <CreateTripSection background={stars}>
            <Header/>
            <h1>Criar Viagem</h1>
            <form onSubmit={handleCreateTrip}>
                <input
                    required
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{5,}"
                />
                <select name="planet" value={form.planet} onChange={onChange} required>
                    <option>Escolha um planeta</option>
                    <option value={"Mercúrio"}>Mercúrio</option>
                    <option value={"Vênus"}>Vênus</option>
                    <option value={"Terra"}>Terra</option>
                    <option value={"Marte"}>Marte</option>
                    <option value={"Júpiter"}>Júpiter</option>
                    <option value={"Saturno"}>Saturno</option>
                    <option value={"Urano"}>Urano</option>
                    <option value={"Netuno"}>Netuno</option>
                </select>
                <input
                    required
                    type="date"
                    placeholder="Data"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    min={today.toLocaleDateString()}
                />
                <input
                    required
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{30,}"
                />
                <input
                    required
                    type="number"
                    placeholder="Duração em dias"
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
                    min={50}
                />
                <button>Criar</button>
            </form>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <div>
                <Footer/>
            </div>
        </CreateTripSection>
    )
}