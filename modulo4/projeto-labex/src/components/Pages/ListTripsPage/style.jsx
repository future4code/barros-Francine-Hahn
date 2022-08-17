import styled from "styled-components";


export const BiggerContainer = styled.section `
    height: 100vh;
    background-image: url(${props => props.background});
    background-size: cover;
    h1 {
        text-align: center;
        margin: 10vh 0 7vh 0;
        color: white;
    }
    div {
        margin-top: 17.5vh;
        background-color: #526b7d94;
    }
`

export const SmallerContainer = styled.ul `
    display: grid;
    grid-template-columns: repeat(4, 25%);
    margin: 4vh 4vw;
    list-style: none;
`


export const ListTrips = styled.li `
    display: flex;
    flex-direction: column;
    background-color: #3e698af6;
    box-shadow: 3px 3px 3px #07070734;
    padding: 2vh;
    width: 80%;
    h2 {
        font-size: 28px;
        color: white;
        margin-bottom: 1.5vh;
    }
    h3 {
        font-size: 21px;
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