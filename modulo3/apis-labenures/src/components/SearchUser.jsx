import React, { useState } from "react";
import axios from "axios";
import {ContainerUsers, UsersList, Formulario, UserInfo} from '../style'


export function SearchUser(props) {
    //State que guarda todos os usuários
    const [allUsers, setAllUsers] = useState([{name: "Carregando...", id: ""}])

    //State que guarda nome procurado através do input
    const [nameSearch, setNameSearch] = useState("")
    
    //States de nome e id do usuário que foi filtrado através do input
    const [nameFiltered, setNameFiltered] = useState("")
    const [idFiltered, setIdFiltered] = useState()

    //States das informações do usuário selecionado
    const [nameDetails, setNameDetails] = useState("")
    const [emailDetails, setEmailDetails] = useState("")

    

    //Requisição getAllUsers
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers: {
            Authorization: 'francine-hahn-barros'
        }
    }).then(response => setAllUsers(response.data)).catch(error => console.log(error.response.data))


    //Função que está no onClick do botão SALVAR EDIÇÃO
    const handleNameSearch = (e) => {
        e.preventDefault()
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${nameSearch}`, {
            headers: {
                Authorization: 'francine-hahn-barros'
            }
        }).then(response => {
            setNameFiltered(response.data[0].name)
            setIdFiltered(response.data[0].id)

        }).catch(error => alert(error.response.data))
        
        return props.setShowName(true)
    }


    //Função que está no onClick do botão PARA DELETAR usuário
    const handleUserDeletion = (id) => {
        const deleteUser = confirm('Tem certeza que deseja apagar o usuário?')
        if (deleteUser) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
                headers: {
                    Authorization: "francine-hahn-barros"
                }
            }).then(alert('Usuário deletado com sucesso')).catch(error => alert(error))
        }
    }


    //Função que está no onClick do botão INFORMAÇÕES
    const handleDetails = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: "francine-hahn-barros"
            }
        }).then(response => {
            setNameDetails(response.data.name)
            setEmailDetails(response.data.email)
        }).catch(error => alert(error))
    }


    //Função que está no onClick do botão LIMPAR INFORMAÇÕES
    const handleClearInfo = () => {
        setNameDetails("")
        setEmailDetails("")
    }


    return (
        <ContainerUsers>
            <section>
                {props.showName===false && (
                    allUsers.map(item => {
                        return (
                            <UsersList>
                                <li key={item.id}>{item.name}</li>
                                <li>
                                    <button onClick={() => handleDetails(item.id)}>Informações</button>
                                    <button onClick={() => handleUserDeletion(item.id)}>x</button>
                                </li>
                            </UsersList>
                        )
                    })
                )}
                
                {props.showName===true && (
                    <UsersList>
                        <li key={idFiltered}>{nameFiltered}</li>
                        <li>
                            <button onClick={() => handleDetails(idFiltered)}>Informações</button>
                            <button onClick={() => handleUserDeletion(idFiltered)}>x</button>
                        </li>
                    </UsersList>
                )}
            </section>
            
            
            <UserInfo>
                <h3>Informações do usuário</h3>
                <p>Nome: {nameDetails}</p>
                <p>E-mail: {emailDetails}</p>
                <button onClick={handleClearInfo}>Limpar informações</button>
            </UserInfo>

            <Formulario>
                <h3>Procurar usuário</h3>
                <input type="text" value={nameSearch} placeholder={"Nome exato para busca"} onChange={e => setNameSearch(e.target.value)}/>
                <button onClick={handleNameSearch}>Salvar edição</button>
            </Formulario>
        </ContainerUsers>
    )
}