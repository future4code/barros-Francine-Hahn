import React, {useContext, useState} from "react";
import {HeaderSection, MenuMobile} from './style'
import {Link} from 'react-router-dom'
import logo from '../../img/labex.png'
import { AuthContext } from "../../contexts/AuthContext";



export function Header() {
    const {login, setLogin} = useContext(AuthContext)
    const [showMenu, setShowMenu] = useState(false)

    const handleLogout = () => {
        setLogin(false)
        localStorage.clear()
    }

    const handleOpenMenu = () => {
        setShowMenu(true)
        console.log(showMenu)
    }

    const handleCloseMenu = () => {
        setShowMenu(false)
        console.log(showMenu)
    }

    const nav = () => {
        return (
            <>
                <Link to="/">Home</Link>
                <Link to="/lista-de-viagens">Viagens</Link>
                <Link to="/agendar-viagem">Inscrever-se</Link>
                {login && <Link to="/admin">Perfil</Link>}
                {login? <Link to="/login" onClick={handleLogout}>Logout</Link> :
                <Link to="/login">Login</Link>}
            </>
        )
    }

    return (
        <HeaderSection>
            <img src={logo} alt={'Logo da Labex'}/>
            <nav>
                {nav()}
            </nav>
            <MenuMobile>
                <div onClick={handleOpenMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {showMenu && (
                    <section>
                        <button onClick={handleCloseMenu}>x</button>
                        <nav>{nav()}</nav>
                    </section>
                )}
            </MenuMobile>
        </HeaderSection>
    )
}

