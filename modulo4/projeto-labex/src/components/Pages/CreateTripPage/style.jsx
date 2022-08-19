import styled from "styled-components";


export const CreateTripSection = styled.section `
    background-image: url(${props => props.background});
    height: 100vh;
    
    @keyframes starsAnimation {
        from {background-size: 80%;}
        to {background-size: 90%;}
    }
    animation: starsAnimation 15s ease infinite;

    h1 {
        text-align: center;
        margin: 6% 0 2% 0;
        color: white;
    }
    button {
        display: block;
        margin: 0 auto 5% auto;
        padding: .5% 2%;
    }
    form {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        @media screen and (min-width: 1300px) {
            width: 30%;
        }
        @media screen and (min-width: 1000px) and (max-width: 1300px) {
            width: 35%;
        }
        @media screen and (min-width: 800px) and (max-width: 1000px) {
            width: 50%;
        }
        @media screen and (min-width: 600px) and (max-width: 800px) {
            width: 70%;
        }
        @media screen and (min-width: 320px) and (max-width: 600px) {
            width: 90%;
        }
        input, select {
            padding: 1.5% .5%;
        }
        button {
            width: 100%;
            padding: 2% 0;
        }
    }
`