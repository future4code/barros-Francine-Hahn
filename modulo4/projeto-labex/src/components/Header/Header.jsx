import React, {useContext} from "react";
import {HeaderSection} from './style'
import {Link} from 'react-router-dom'
import logo from '../../img/labex.png'
import { AuthContext } from "../../contexts/AuthContext";



export function Header() {
    const {login, setLogin} = useContext(AuthContext)

    const handleLogout = () => {
        setLogin(false)
        localStorage.clear()
    }

    return (
        <HeaderSection>
            <img src={logo} alt={'Logo da Labex'}/>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/lista-de-viagens">Viagens</Link>
                <Link to="/agendar-viagem">Inscrever-se</Link>
                {login && <Link to="/admin">Perfil</Link>}
                {login? <Link to="/login" onClick={handleLogout}>Logout</Link> :
                <Link to="/login">Login</Link>}
            </nav>
        </HeaderSection>
    )
}

