import styled from "styled-components";


export const BiggerContainer = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    div {
        background-image: linear-gradient(to right, #11365de6, #4279b4e6);
    }
`


export const HomeSection = styled.section `
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;

    h2 {
        color: white;
    }
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80vh;
    
        section {
            height: 20vh;
            padding: 3vh;
            display: flex;
            flex-direction: column;
            gap: 3.5vh;

            button {
                padding: 1.5vh 2.5vw;
                font-size: 16px;
                color: white;
                border: 1px solid white;
                background-color: transparent;
                :hover {
                    background-color: white;
                    color: black;
                }
            }
        }
    }
`