import React from "react";
import {Header} from '../../Header/Header'
import {useNavigate} from 'react-router-dom'
import {LoginSection} from './style'



export function LoginPage() {
    
    const navigate = useNavigate()

    
    return (
        <LoginSection>
            <Header />
            <section>
                <h1>Login Page</h1>
                <form>
                    <input type={"email"} placeholder={'Usuário'}/>
                    <input type={"password"} placeholder={'Senha'}/>
                </form>
                <button onClick={() => navigate("/admin")}>Entrar</button>
            </section>
        </LoginSection>
    )
}