import styled from "styled-components";


export const BiggerContainer = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    min-height: 130vh;

    h1 {
        text-align: center;
        color: white;
        @media screen and (min-width: 800px) {
            margin: 4% 0 -1% 0;
        }
        @media screen and (min-width: 500px) and (max-width: 800px) {
            margin: 8% 0 7% 0;
        }
        @media screen and (min-width: 320px) and (max-width: 500px) {
            margin: 10% 0 7% 0;
        }
    }
`

export const SmallerContainer = styled.ul `
    list-style: none;
    margin: 5%;
    justify-content: center;
    @media screen and (min-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(4, 25%);
        align-content: center;
        row-gap: 8%;
    }
    @media screen and (min-width: 600px) and (max-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-content: center;
        gap: 5%;
    }
    @media screen and (min-width: 320px) and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3vh;
        padding-bottom: 5vh;
    }
`


export const ListTrips = styled.li `
    display: flex;
    flex-direction: column;
    background-color: #3e698af6;
    box-shadow: 3px 3px 3px #07070734;
    padding: 2vh;
    width: 80%;
    h2 {
        color: white;
        margin-bottom: 1.5vh;
    }
    h3 {
        color: white;
        margin-bottom: 1.5vh;
    }
    p {
        line-height: 3vh;
        color: white;
        margin-bottom: 1.5vh;
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