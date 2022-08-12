import React, { useState } from "react";
import {HeaderSection} from './style'
import {Link} from 'react-router-dom'



export function Header() {
    
    const [login, setLogin] = useState(false)

    return (
        <HeaderSection>
            <h1>labeX</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/lista-de-viagens">Viagens</Link>
                <Link to="/agendar-viagem">Inscrever-se</Link>
                {login? <Link to="/" onClick={() => setLogin(false)}>Logout</Link> :
                <Link to="/login" onClick={() => setLogin(true)}>Login</Link>}
            </nav>
        </HeaderSection>
    )
}

