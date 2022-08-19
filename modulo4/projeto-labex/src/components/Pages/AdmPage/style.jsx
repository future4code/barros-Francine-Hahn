import styled from "styled-components";


export const BiggerContainer = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    height: 100vh;
`


export const AdminSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    h1 {
        text-align: center;
        margin: 13vh 0 2vh 0;
        color: white;
    }
    button {
        padding: 1vh 2vw;
        margin: .5vh 0;
    }
`


export const ListTripsSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        display: flex;
        align-items: center;
        gap: 10vw;
        padding: 1vh 2vw;
    }
`

export const ButtonSection = styled.section `
    display: flex;
    gap: 1%;
    button {
        border: none;
        padding: 1vh 1vw;
        :nth-child(1) {
            width: 18vw;
        }
        :nth-child(2) {
            width: 4vw;
        }
        img {
            width: 90%;
        }
    }
`


export const Loading = styled.img `
    width: 5%;
    display: block;
    margin: 19.1vh auto;
    @keyframes rotate {
        from {transform: rotate(0)}
        to {transform: rotate(360deg)}
    }
    animation: rotate 1s infinite;
`