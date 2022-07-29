import styled from "styled-components";

export const ContainerGeral = styled.section `
    background-color: lightgray;
    height: 100vh;
`

export const Botao = styled.button `
    padding: 1.5vh 1vw;
    margin: 8vh 46vw 5vh 46vw;
`

export const Formulario = styled.form `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 30vw;
    input {
        padding: 7px 3px;
    }
    button {
        padding: 7px 0;
    }
    h3 {
        font-size: 18px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 10px;
    }
`

export const ContainerUsers = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const UsersList = styled.ul `
    display: flex;
    justify-content: center;
    gap: 15px;
    font-size: 18px;
    padding: 10px;
    width: 29vw;
    list-style: none;
    :nth-child(even) {
        background-color: white;
    }
    :nth-child(odd) {
        background-color: rgb(225, 225, 225);
    }
    button {
        :nth-child(1) {
            height: 25px;
            width: 80px;
        }
        :nth-child(2) {
            height: 25px;
            width: 25px;
        }
    }
`

export const TableLine = styled.ul `
    background-color: rgb(225, 225, 225);
    font-size: 18px;
    padding: 10px;
    width: 29vw;
    text-align: center;
    list-style: none;
`

export const UserInfo = styled.section `
    width: 30vw;
    p {
        text-align: center;
        padding: 5px 0;
        :nth-child(even) {
        background-color: white;
        }
        :nth-child(odd) {
            background-color: rgb(225, 225, 225);
        }
    }
    
    h3 {
        font-size: 18px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 10px;
    }

    button {
        height: 30px;
        width: 30vw;
        display: block;
        margin: 0 auto;
    }
`