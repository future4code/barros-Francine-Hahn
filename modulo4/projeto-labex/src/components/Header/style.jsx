import styled from "styled-components";


export const HeaderSection = styled.header `
    background-color: #1a0042;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h1 {
        color: white;
    }
    nav {
        display: flex;
        gap: 5vw;
        a {
            color: white;
            :hover {
                color: lightgray;
            }
        }
    }
`