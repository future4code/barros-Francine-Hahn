import styled from "styled-components";


export const HeaderSection = styled.header `
    background-color: transparent;
    height: 10vh;
    padding: .5% 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
        @media screen and (min-width: 1200px) {
            width: 8%;
        }
        @media screen and (min-width: 900px) and (max-width: 1200px) {
            width: 10%;
        }
        @media screen and (min-width: 700px) and (max-width: 900px) {
            width: 12%;
        }
        @media screen and (min-width: 500px) and (max-width: 700px) {
            width: 18%;
        }
        @media screen and (min-width: 320px) and (max-width: 500px) {
            width: 25%;
        }
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