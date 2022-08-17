import styled from "styled-components";


export const LoginSection = styled.section `
    height: 95vh;
    background-image: url(${props => props.background});
    
    @keyframes starsAnimation {
        from {background-size: 80%;}
        to {background-size: 90%;}
    }
    animation: starsAnimation 15s ease infinite;
    
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 7vh auto 0 auto;
        background-color: white;
        width: 17%;
        padding: 11vh 4vw;
        border-radius: 10px;
        img {
            width: 30%;
            margin-bottom: 6vh;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 2vh;
            margin: 3vh 0;
            input {
                padding: 1vh .5vw;
                font-size: 16px;
                width: 20vw;
            }
        }
        button {
            padding: 1vh 2vw;
            font-size: 16px;
        }
    }
    div {
        background-color: black;
        margin-top: 8.5vh;
    }
`