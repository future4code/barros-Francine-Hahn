import styled from "styled-components";


export const CardMatches = styled.section `
    margin: 1vw;
    display: flex;
    gap: 15px;
    align-items: center;
    img {
        width: 2vw;
        height: 6vh;
        border-radius: 50%;
    }
    button {
        background-color: rgb(0, 152, 68);
        width: 5vw;
        height: 5vh;
        border-radius: 5px;
        color: white;
    }
`

export const ContainerMatches = styled.section `
    display: grid;
    min-height: 70vh;
    grid-template-columns: 70% 30%;
    button {
        height: 6vh;
        width: 5vw;
        border-radius: 5px;
        margin: 1vw;
    }
`


export const NoMatches = styled.div `
    p {
        margin: 3vh 1vw;
    }
    img {
        width: 30%;
        display: block;
        margin: 0 auto;
    }
`
