import styled from "styled-components";


export const CreateTripSection = styled.section `
    height: 100vh;
    background-image: url(${props => props.background});
    
    @keyframes starsAnimation {
        from {background-size: 80%;}
        to {background-size: 90%;}
    }
    animation: starsAnimation 15s ease infinite;

    h1 {
        text-align: center;
        margin: 15vh 0 2vh 0;
        color: white;
    }
    button {
        display: block;
        margin: 0 auto 5vh auto;
        padding: 1vh 2vw;
    }
    div {
        margin-top: 17vh;
        background-color: black;
    }
    form {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 25%;
        input {
            font-size: 16px;
            padding: 1vh .5vw;
        }
        button {
            width: 100%;
        }
    }
`