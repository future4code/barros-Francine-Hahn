import React, { useState } from "react";
import axios from 'axios'
import { useForm } from "../../../hooks/useForm";
import { urlBase } from "../../../constants/urlBase";
import {Header} from '../../Header/Header'
import {ApplicationSection, Loading} from './style'
import { useRequestData } from "../../../hooks/useRequestData";
import space from '../../../img/space.jpg'



export function ApplicationPage() {
    const [isLoading, setIsLoading] = useState(false)

    const [form, onChange, clear] = useForm({name: "", age: "", text: "", profession: "", country: "", tripId: ""})
    const [data, loading, error] = useRequestData(`${urlBase}trips`)

    const countries = ["Brasil", "Afeganistão", "África do Sul", "Albânia", "Alemanha", "Andorra", "Angola", "Anguilla",
    "Antilhas Holandesas", "Antárctida", "Antígua e Barbuda", "Argentina", "Argélia", "Armênia", "Aruba", "Arábia Saudita",
    "Austrália", "Áustria", "Azerbaijão", "Bahamas", "Bahrein", "Bangladesh", "Barbados", "Belize", "Benim", "Bermudas",
    "Bielorrússia", "Bolívia", "Botswana", "Brunei", "Bulgária", "Burkina Faso", "Burundi", "Butão", "Bélgica", "Bósnia e Herzegovina",
    "Cabo Verde", "Camarões", "Camboja", "Canadá", "Catar", "Cazaquistão", "Chade", "Chile", "China", "Chipre", "Colômbia",
    "Comores", "Coreia do Norte", "Coreia do Sul", "Costa do Marfim", "Costa Rica", "Croácia", "Cuba", "Dinamarca", "Djibouti",
    "Dominica", "Egito", "El Salvador", "Emirados Árabes Unidos", "Equador", "Eritreia", "Escócia", "Eslováquia", "Eslovênia",
    "Espanha", "Estados Federados da Micronésia", "Estados Unidos", "Estônia", "Etiópia", "Fiji", "Filipinas", "Finlândia", "França",
    "Gabão", "Gana", "Geórgia", "Gibraltar", "Granada", "Gronelândia", "Grécia", "Guadalupe", "Guam", "Guatemala", "Guernesei",
    "Guiana", "Guiana Francesa", "Guiné", "Guiné Equatorial", "Guiné-Bissau", "Gâmbia", "Haiti", "Honduras", "Hong Kong", "Hungria",
    "Ilha Bouvet", "Ilha de Man", "Ilha do Natal", "Ilha Heard e Ilhas McDonald", "Ilha Norfolk", "Ilhas Cayman", "Ilhas Cocos (Keeling)",
    "Ilhas Cook", "Ilhas Feroé", "Ilhas Geórgia do Sul e Sandwich do Sul", "Ilhas Malvinas", "Ilhas Marshall",
    "Ilhas Menores Distantes dos Estados Unidos", "Ilhas Salomão", "Ilhas Virgens Americanas", "Ilhas Virgens Britânicas","Ilhas Åland",
    "Indonésia", "Inglaterra", "Índia", "Iraque", "Irlanda do Norte", "Irlanda", "Irã", "Islândia", "Israel", "Itália", "Iêmen",
    "Jamaica", "Japão", "Jersey", "Jordânia", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letônia", "Libéria", "Liechtenstein", "Lituânia",
    "Luxemburgo", "Líbano", "Líbia", "Macau", "Macedônia", "Madagáscar", "Malawi", "Maldivas", "Mali", "Malta", "Malásia",
    "Marianas Setentrionais", "Marrocos", "Martinica", "Mauritânia", "Maurícia", "Mayotte", "Moldávia", "Mongólia", "Montenegro",
    "Montserrat", "Moçambique", "Myanmar", "México", "Mônaco", "Namíbia", "Nauru", "Nepal", "Nicarágua", "Nigéria", "Niue", "Noruega",
    "Nova Caledônia", "Nova Zelândia", "Níger", "Omã", "Palau", "Palestina", "Panamá", "Papua-Nova Guiné", "Paquistão", "Paraguai",
    "País de Gales", "Países Baixos", "Peru", "Pitcairn", "Polinésia Francesa", "Polônia", "Porto Rico", "Portugal", "Quirguistão",
    "Quênia", "Reino Unido", "República Centro-Africana", "República Checa", "República Democrática do Congo", "República do Congo",
    "República Dominicana", "Reunião", "Romênia", "Ruanda", "Rússia", "Saara Ocidental", "Saint Martin", "Saint-Barthélemy",
    "Saint-Pierre e Miquelon", "Samoa Americana", "Samoa", "Santa Helena, Ascensão e Tristão da Cunha", "Santa Lúcia", "Senegal",
    "Serra Leoa", "Seychelles", "Singapura", "Somália", "Sri Lanka", "Suazilândia", "Sudão", "Suriname", "Suécia", "Suíça",
    "Svalbard e Jan Mayen", "São Cristóvão e Nevis", "São Marino", "São Tomé e Príncipe", "São Vicente e Granadinas", "Sérvia", "Síria",
    "Tadjiquistão", "Tailândia", "Taiwan", "Tanzânia", "Terras Austrais e Antárticas Francesas", "Território Britânico do Oceano Índico",
    "Timor-Leste", "Togo", "Tonga", "Toquelau", "Trinidad e Tobago", "Tunísia", "Turcas e Caicos", "Turquemenistão", "Turquia", "Tuvalu",
    "Ucrânia", "Uganda", "Uruguai", "Uzbequistão", "Vanuatu", "Vaticano", "Venezuela", "Vietname", "Wallis e Futuna", "Zimbabwe", "Zâmbia"]

    //Quando usuário envia o formulário
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)

        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.text,
            profession: form.profession,
            country: form.country
        }

        setIsLoading(true)

        axios.post(`${urlBase}trips/${form.tripId}/apply`, body).then(() => {
            setIsLoading(false)
            alert("Sua inscrição foi concluída com sucesso!")
        }).catch(err => {
            setIsLoading(false)
            alert(`Ocorreu um erro: ${err}`)
        })

       clear()
    }

    return (
        <ApplicationSection background={space}>
            <Header/>
            <section>
                <h1>Inscreva-se para uma viagem</h1>

                <form onSubmit={handleSubmit}>
                    <select name="tripId" value={form.tripId} onChange={onChange} required>
                        <option>Escolha uma viagem</option>
                        {data && data.trips && data.trips.map(item => {
                            return <option key={item.id} value={item.id}>{item.name}</option>
                        })}
                    </select>

                    <input
                        required
                        type="text"
                        placeholder="Nome"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        pattern="^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{3,}$"
                    />
                    <input
                        required
                        type="number"
                        placeholder="Idade"
                        name="age"
                        value={form.age}
                        onChange={onChange}
                        min={18}
                    />
                    <input
                        required
                        type="text"
                        placeholder="Por que você é um(a) bom/boa candidato(a)?"
                        name="text"
                        value={form.text}
                        onChange={onChange}
                        pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{30,}"
                    />
                    <input
                        required
                        type="text"
                        placeholder="Profissão"
                        name="profession"
                        value={form.profession}
                        onChange={onChange}
                        pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{10,}"
                    />
                  
                    <select name="country" value={form.country} onChange={onChange} required>
                        <option>Selecione o país</option>
                        {countries.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </select>

                    <button>Enviar</button>
                </form>

                {isLoading && <Loading>Carregando...</Loading>}
            </section>
        </ApplicationSection>
    )
}