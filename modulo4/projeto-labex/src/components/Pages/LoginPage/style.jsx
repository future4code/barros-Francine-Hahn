import styled from "styled-components";


export const LoginSection = styled.section `
    background-image: url(${props => props.background});
    height: 100vh;

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
        margin: 9vh auto 0 auto;
        background-color: white;
        padding: 11vh 4vw;
        border-radius: 10px;
        @media screen and (min-width: 1300px) {
            width: 17%;
        }
        @media screen and (min-width: 1000px) and (max-width: 1300px) {
            width: 22%;
        }
        @media screen and (min-width: 800px) and (max-width: 1000px) {
            width: 30%;
        }
        @media screen and (min-width: 600px) and (max-width: 800px) {
            width: 45%;
        }
        @media screen and (min-width: 320px) and (max-width: 600px) {
            width: 70%;
        }
        img {
            width: 30%;
            margin-bottom: 6vh;
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2vh;
            margin: 3vh 0;
            input {
                padding: 1vh .5vw;
                @media screen and (min-width: 800px) {
                    width: 110%;
                }
                @media screen and (min-width: 700px) and (max-width: 800px) {
                    width: 120%;
                }
                @media screen and (min-width: 600px) and (max-width: 700px) {
                    width: 125%;
                }
                @media screen and (min-width: 500px) and (max-width: 600px) {
                    width: 150%;
                }
                @media screen and (min-width: 430px) and (max-width: 500px) {
                    width: 130%;
                }
                @media screen and (min-width: 320px) and (max-width: 430px) {
                    width: 115%;
                }
            }
            button {
                padding: 1vh 0;
                @media screen and (min-width: 800px) {
                    width: 118%;
                }
                @media screen and (min-width: 700px) and (max-width: 800px) {
                    width: 127%;
                }
                @media screen and (min-width: 600px) and (max-width: 700px) {
                    width: 130%;
                }
                @media screen and (min-width: 500px) and (max-width: 600px) {
                    width: 155%;
                }
                @media screen and (min-width: 430px) and (max-width: 500px) {
                    width: 135%;
                }
                @media screen and (min-width: 320px) and (max-width: 430px) {
                    width: 120%;
                }
            }
        }
    }
`