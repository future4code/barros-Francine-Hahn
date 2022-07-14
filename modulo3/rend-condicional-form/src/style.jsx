import styled from "styled-components";

export const FormDadosGerais = styled.form `
    width: 40%;
    margin: 30px auto;
    padding: 20px;
    background-color: grey;
    color: white;
    border-radius: 10px;
    h1 {
        font-size: 22px;
        text-align: center;
        margin-bottom: 20px;
    }

    input, label, select {
        display: block;
        margin: 10px auto;
        font-size: 14px;
        padding: 5px;
        border-radius: 5px;
        width: 70%;
    }

    label {
        font-size: 16px;
        margin-top: 30px;
    }

    button {
        padding: 8px 12px;
        display: block;
        margin: 25px auto 0 auto;
        font-size: 14px;
        border-radius: 5px;
    }
`

export const ContainerTitulo = styled.div `
    background-color: grey;
    height: 100vh;
    h1 {
        font-size: 42px;
        color: white;
        text-align: center;
        padding-top: 47vh;
    }
`