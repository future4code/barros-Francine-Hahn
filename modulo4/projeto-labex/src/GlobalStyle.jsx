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
    font-family: 'Roboto', sans-serif;
    button, select {
        cursor: pointer;
        font-size: 16px;
    }
    h1 {
        font-size: 40px;
    }
    h2 {
        font-size: 32px;
    }

`