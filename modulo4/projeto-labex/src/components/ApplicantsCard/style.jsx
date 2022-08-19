import styled from "styled-components";


export const BiggerContainer = styled.section `
    display: flex;
    justify-content: center;
    gap: 6vw;
    background-color: #6984a0;
    width: 35%;
    margin: 1% auto;
    padding: 2vw;
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style: none;
        li {
            color: white;
            margin: 1vh;
        }
    }
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3vh;
        button {
            border: 1px solid white;
            background-color: transparent;
            padding: 1.5vh 1.5vw;
            color: white;
            :hover {
                background-color: white;
                color: black;
            }
        }
    }
`