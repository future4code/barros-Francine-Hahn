import styled from "styled-components";


export const ApplicationSection = styled.section `
    height: 100vh;
    background-image: url(${props => props.background});
    background-size: cover;
    section {
        display: block;
        margin: 10vh auto;
        width: 40vw;
        h1 {
            margin: 5vh 0;
            text-align: center;
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            input {
                padding: 1vh;
                font-size: 16px;
                width: 25vw;
            }
            select {
                padding: 1vh;
                font-size: 16px;
                width: 26.1vw;
            }
            button {
                font-size: 16px;
                padding: 1vh 2vw;
                width: 26.1vw;
            }
        }
    }
    div {
        margin-top: 23.5vh;
        background-color: #42688f;
    }
`

export const Loading = styled.p `
    text-align: center;
    margin-top: 3vh;
`