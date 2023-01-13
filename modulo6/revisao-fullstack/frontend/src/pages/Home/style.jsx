import styled from "styled-components"


export const Container = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3vh;

    h3 {
        font-size: 24px;
        margin-top: 3vh;
    }

    #totalPrice {
        font-size: 26px;
        color: red;
    }
`