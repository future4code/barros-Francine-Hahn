import styled from "styled-components";


export const HeaderSection = styled.header `
    background-color: transparent;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
        width: 8%;
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