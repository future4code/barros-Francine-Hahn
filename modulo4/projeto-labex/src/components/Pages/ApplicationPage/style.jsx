import styled from "styled-components";


export const ApplicationSection = styled.section `
    height: 90vh;
    section {
        display: block;
        margin: 8vh auto;
        width: 40vw;
        h1 {
            font-size: 26px;
            margin: 5vh 0;
            text-align: center;
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            input, select {
                padding: 1vh;
                font-size: 16px;
                width: 25vw;
            }
        }
        aside {
            display: flex;
            justify-content: center;
            gap: 5vw;
            margin-top: 5vh;
            button {
                padding: 1vh 2vw;
            }
        }
    }
`

export const Loading = styled.p `
    text-align: center;
    margin-top: 3vh;
`