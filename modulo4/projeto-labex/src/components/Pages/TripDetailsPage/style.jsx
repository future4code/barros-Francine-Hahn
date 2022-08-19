import styled from "styled-components";


export const DetailsSection = styled.section `
    background-image: linear-gradient(to right, #326d8d, #4689b3, #3199da);
    background-size: contain;
    min-height: 100vh;
    padding: 0 5vw;
    section {
        padding: 5vh 0;
        h2 {
            color: white;
            text-align: center;
            margin: 2% 0 0 0;
        }
        section {
            h1 {
                text-align: center;
                margin: 1%;
                color: white;
            }
            p {
                color: white;
                text-align: center;
                margin: 1vh 30vw;
            }
        }
    }
    button {
        display: flex;
        margin: 0 auto;
        padding: 1.5vh 2vw;
        background-color: transparent;
        border: 1px solid white;
        color: white;
        :hover {
            background-color: white;
            color: black;
        }
    }
`


export const PendingCandidates = styled.section `
    display: flex;
    flex-direction: column;
    gap: 2vh;
    justify-content: center;
`


export const ApprovedCandidates = styled.section `
    h2 {
        color: white;
        text-align: center;
        margin: 4% 0 2% 0;
    }
    ul {
        margin: 2% 0;
        list-style: square;
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
            color: white;
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