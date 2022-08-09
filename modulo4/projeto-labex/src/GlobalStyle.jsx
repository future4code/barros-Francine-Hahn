import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
`

export const GeneralContainer = styled.main `
    background-color: #f2f2f2;
    height: 95vh;
    font-family: Arial, Helvetica, sans-serif;
    button {
        cursor: pointer;
    }
`