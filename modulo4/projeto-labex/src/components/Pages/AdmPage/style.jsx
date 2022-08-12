import styled from "styled-components";


export const AdminSection = styled.section `
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    h1 {
        font-size: 24px;
        text-align: center;
        margin-top: 5vh;
    }
    button {
        padding: 1vh 2vw;
    }
`


export const ListTripsSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        display: flex;
        align-items: center;
        gap: 10vw;
        padding: 1vh 2vw;
    }
`