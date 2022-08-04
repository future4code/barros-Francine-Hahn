import styled from "styled-components";


export const HeaderSection = styled.header `
    height: 4vh;
    padding: 1vh 0;
    display: flex;
    gap: 4vw;
    border-bottom: 1px solid lightgrey;
    button {
        margin: 0 1vw;
        background-color: white;
        width: 2vw;
        img {
            width: 2vw;
        }
    }
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        h1:nth-child(1) {
            color: rgb(0, 152, 68);
        }
        h1:nth-child(2) {
            color: rgb(81, 0, 157);
        }
    }
    
`