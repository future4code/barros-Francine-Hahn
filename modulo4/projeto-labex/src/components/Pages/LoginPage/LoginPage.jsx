import React from "react"
import axios from "axios"
import { useForm } from "../../../hooks/useForm"
import {urlBase} from '../../../hooks/urlBase'
import {Header} from '../../Header/Header'
import {useNavigate} from 'react-router-dom'
import {LoginSection} from './style'
import stars from '../../../img/stars.png'
import { Footer } from "../../Footer/Footer"
import user from '../../../img/user.png'



export function LoginPage() {
    const [form, onChange, clear] = useForm({email: "", password: ""})    
    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault()
    
        axios.post(`${urlBase}login`, form).then(
            navigate("/admin")
        ).catch(err => alert(err))
        
        clear()
    }

    
    return (
        <LoginSection background={stars}>
            <Header />
            <section>
                <img src={user} alt={'Imagem de um usuário'}/>
                <form onSubmit={handleLogin}>
                    <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        placeholder={'Usuário'}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        onChange={onChange}
                    />
                    <input
                        required
                        type="password"
                        name="password"
                        value={form.password}
                        placeholder={'Senha'}
                        onChange={onChange}
                    />
                    <button>Entrar</button>
                </form>
            </section>

            <div>
                <Footer/>
            </div>
        </LoginSection>
    )
}