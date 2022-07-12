import styled from "styled-components";


export const Cabecalho = styled.header `
    display: flex;
    gap: 260px;
    align-items: center;
    background-color: orange;
    color: white;
    padding: 5px 10px;
    div {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
        border-radius: 50%;
        width: 35px;
        height: 35px;
        }
    }
`

export const SecaoCentral = styled.section `
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    margin: 10px auto;
    background-color:rgb(235, 235, 235);
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 95vh;
    width: 40%;
`

export const Mensagens = styled.section `
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-end;
    margin: 0 0 10px 10px;
    overflow-y: scroll;
`

export const Formulario = styled.form `
    height: 10%;
    width: 92%;
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: flex-end;
    margin: 0 15px;
    input:nth-child(1) {
        padding: 6px 0 6px 5px;
        width: 22%;
        border-radius: 5px;
        border: 1px solid grey;
    }
    input:nth-child(2) {
        padding: 6px 0 6px 5px;
        width: 55%;
        border-radius: 5px;
        border: 1px solid grey;
    }
    button {
        padding: 6px 0;
        width: 15%;
        border-radius: 5px;
        border: 1px solid grey;
    }
`


//COMPONENTE MSG

export const ContainerMsg = styled.section `
    display: flex;
    justify-content: flex-end;
    p {
        padding: 8px 10px;
        margin: 0 20px 0 0;
        background-color: lightgreen;
        border-radius: 10px;
        max-width: 35%;
    }
    button {
        height: 15px;
        width: 15px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid black;
        display: none;
        cursor: pointer;
    }
    &:hover button {
        display: block;
    }   
`

export const MsgOutrosUsuarios = styled.section `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   
    p {
        margin: 3px 0 3px 15px;
        min-width: 14%;
        max-width: 35%;
    }
    p:nth-child(2) {
        background-color: white;
        padding-left: 10px;
        font-weight: bold;
        border-radius: 10px;
        margin-bottom: -10px;
        position: relative;
    }
    p:nth-child(3) {
        background-color: white;
        border-radius: 10px;
        padding: 25px 10px 8px 10px;
        margin-top: -10px;
    }
    button {
        height: 15px;
        width: 15px;
        border-radius: 3px;
        border: 1px solid black;
        margin-bottom: -15px;
        display: none;
        cursor: pointer;
    }
    &:hover button {
        display: block;
    }
`
