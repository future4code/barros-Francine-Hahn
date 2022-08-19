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
        margin: 11vh 1vw 2vh 1vw;
        color: white;
    }
    button {
        padding: 1.5vh 2vw;
        margin: .5vh 0;
        background-color: transparent;
        border: 1px solid white;
        color: white;
        :hover {
            background-color: white;
            color: black;
        }
    }
`


export const ListTripsSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtonSection = styled.section `
    display: flex;
    gap: 1%;
    button {
        background-color: transparent;
        border: 1px solid white;
        padding: 1vh 1vw;
        color: white;
        :hover {
            background-color: white;
            color: black;
        }
        :nth-child(1) {
            @media screen and (min-width: 1280px) {
                width: 18vw;
            }
            @media screen and (min-width: 1024px) and (max-width: 1280px) {
                width: 22vw;
            }
            @media screen and (min-width: 920px) and (max-width: 1024px) {
                width: 25vw;
            }
            @media screen and (min-width: 830px) and (max-width: 920px) {
                width: 28vw;
            }
            @media screen and (min-width: 720px) and (max-width: 830px) {
                width: 32vw;
            }
            @media screen and (min-width: 580px) and (max-width: 720px) {
                width: 41vw;
            }
            @media screen and (min-width: 470px) and (max-width: 580px) {
                width: 50vw;
            }
            @media screen and (min-width: 320px) and (max-width: 470px) {
                width: 64vw;
            }
        }
        :nth-child(2) {
            @media screen and (min-width: 1024px) {
                width: 4vw;
            }
            @media screen and (min-width: 720px) and (max-width: 1024px) {
                width: 4.5vw;
            }
            @media screen and (min-width: 560px) and (max-width: 720px) {
                width: 5.5vw;
            }
            @media screen and (min-width: 320px) and (max-width: 560px) {
                width: 7vw;
            }
        }
        img {
            width: 100%;
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