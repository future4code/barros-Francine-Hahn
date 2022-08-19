import styled from "styled-components";


export const BiggerContainer = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: top;
    height: 100vh;
`


export const HomeSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 5%;
    section {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 2%;
        gap: 5%;
        width: 30%;
        :nth-child(1) {
            margin-top: 29%;
        }
        h2 {
            color: white;
        }
        button {
            padding: 2% 7%;
            color: white;
            border: 1px solid white;
            background-color: transparent;
            :hover {
                background-color: white;
                color: black;
            }
        }
    }
`