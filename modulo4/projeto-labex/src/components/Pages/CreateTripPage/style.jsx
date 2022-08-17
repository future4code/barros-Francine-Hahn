import styled from "styled-components";


export const CreateTripSection = styled.section `
    height: 100vh;
    background-color: black;
    h1 {
        text-align: center;
        margin: 15vh 0 2vh 0;
        color: white;
    }
    button {
        display: block;
        margin: 0 auto;
        padding: 1vh 2vw;
    }
    div {
        margin-top: 27vh;
    }
    form {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 25%;
        input {
            font-size: 16px;
            padding: 1vh .5vw;
        }
        button {
            width: 100%;
        }
    }
`