import styled from "styled-components";


export const HomeSection = styled.section `
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;
    h2 {
        font-size: 24px;
    }
    section {
        :nth-child(1) {
            background: linear-gradient(to right, #d3afff, #c99cff);
        }
        :nth-child(2) {
            background: linear-gradient(to right, #c394fc, #d2b1fb);
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4vh;
        height: 80vh;
        button {
            padding: 1vh 2vw;
            width: 25%;
            font-size: 16px;
        }
    }
`