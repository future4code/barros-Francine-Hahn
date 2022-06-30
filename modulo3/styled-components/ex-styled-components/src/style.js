import styled from "styled-components";

export const Container = styled.section `
   font-family: Arial, Helvetica, sans-serif;
   padding: 0;
   margin: 0;
`

export const Cabecalho = styled.header `
    display: flex;
    justify-content: center;
    img {
        width: 5%;
    }
`

export const SecaoPrincipal = styled.section `
    display: grid;
    grid-template-columns: 20% 60% 20%;
    height: 75vh;
`

export const LateralEsquerda = styled.aside `
    background-color: orange;
`

export const LateralDireita = styled.aside `
    background-color: orange;
`

export const SecaoCentral = styled.section `
    display: flex;
    align-items: flex-end;
    justify-content: center;
    form {
        display: flex;
        gap: 5px;
        margin-bottom: 15px;
    }
`

export const Rodape = styled.footer `
    background-color: gray;
    margin-top: -13px;
    p {
        padding: 5px 0;
        font-size: 14px;
        text-align: center;
    }
`