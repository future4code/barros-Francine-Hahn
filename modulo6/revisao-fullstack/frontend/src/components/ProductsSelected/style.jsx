import styled from "styled-components"


export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    border: 2px solid var(--darkgreen);
    width: 98vw;
    padding: 2vh 0;

    p {
        font-size: 16px;
    }

    button {
        background-color: var(--darkgreen);
        border: none;
        border-radius: 3px;
        color: white;
        padding: 1vh 1vw;
        :hover {
            opacity: .8;
            cursor: pointer;
        }
    }
`