import React from "react";
import {useNavigate} from 'react-router-dom'
import { Footer } from "../../Footer/Footer";
import {Header} from '../../Header/Header'
import {CreateTripSection} from './style'
import { useForm } from "../../../hooks/useForm";


export function CreateTripPage() {
    const [form, onChange, clear] = useForm({id: "", name: "", planet: "", 	date: "", description: "", durationInDays: ""})
    const navigate = useNavigate()
    
    const handleCreateTrip = (e) => {
        e.preventDefault()
    }


    return (
        <CreateTripSection>
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
                />
                <input
                    required
                    type="text"
                    placeholder="Planeta"
                    name="planet"
                    value={form.planet}
                    onChange={onChange}
                />
                <input
                    required
                    type="date"
                    placeholder="Data"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                />
                <input
                    required
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    value={form.description}
                    onChange={onChange}
                />
                <input
                    required
                    type="number"
                    placeholder="Duração em dias"
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
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