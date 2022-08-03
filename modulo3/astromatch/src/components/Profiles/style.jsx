import styled from "styled-components";


export const Card = styled.section `
    padding: 20px;
    h3 {
        margin-top: -15vh;
        padding: 0 15px 5px 15px;
        color: white;
    }
    p {
        padding: 0 15px;
        color: white;
    }
`


export const Photo = styled.img `
    height: 60vh;
    width: 100%;
    border-radius: 5px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.393);
`


export const ButtonSection = styled.div `
    margin: 8vh 0 6vh 0;
    display: flex;
    justify-content: center;
    gap: 8vw;
    button {
        background-color: white;
        height: 1vh;
        width: 1vw;
        border-radius: 50%;
        img {
            border-radius: 50%;
        }
    }
`