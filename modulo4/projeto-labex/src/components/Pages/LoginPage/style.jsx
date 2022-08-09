import styled from "styled-components";


export const LoginSection = styled.section `
    height: 90vh;
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5vh 0;
        h1 {
            font-size: 24px;
        }
        form {
            display: flex;
            flex-direction: column;
            margin: 3vh 0;
            input {
                padding: .5vh .5vw;
                font-size: 16px;
                width: 20vw;
            }
        }
        button {
            padding: 1vh 2vw;
        }
    }
`