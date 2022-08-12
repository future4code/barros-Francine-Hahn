import styled from "styled-components";


export const BiggerContainer = styled.section `
    height: 90vh;
    h1 {
        text-align: center;
        margin: 10vh 0;
        font-size: 32px;
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
    border: 1px solid black;
    box-shadow: 3px 3px 3px #07070720;
    padding: 2vh;
    width: 80%;
    p {
        line-height: 3vh;
    }
`


export const Loading = styled.p `
    font-size: 28px;
    text-align: center;
`