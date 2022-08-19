import styled from "styled-components";


export const BiggerContainer = styled.section `
    display: grid;
    grid-template-columns: 70% 30%;
    background-color: transparent;
    width: 40%;
    border: 1px solid white;
    box-shadow: 4px 4px 4px #0000001c;
    margin: 1% auto;
    ul {
        list-style: none;
        li {
            color: white;
            margin: 1vh 2vw;
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