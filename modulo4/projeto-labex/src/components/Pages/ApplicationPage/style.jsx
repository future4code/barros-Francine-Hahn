import styled from "styled-components";


export const ApplicationSection = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    min-height: 100vh;

    section {
        display: block;
        margin: 6% auto;
        width: 100%;
        h1 {
            text-align: center;
            @media screen and (min-width: 1200px) {
                margin: 1% 0;
            }
            @media screen and (min-width: 1000px) and (max-width: 1200px) {
                margin: 10% 0 2% 0;
            }
            @media screen and (min-width: 800px) and (max-width: 1000px) {
                margin: 15% 0 2% 0;
            }
            @media screen and (min-width: 320px) and (max-width: 800px) {
                margin: 20% 0 2% 0;
            }
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            input {
                padding: .5%;
                @media screen and (min-width: 1400px) {
                    width: 38%;
                }
                @media screen and (min-width: 1000px) and (max-width: 1400px) {
                    width: 40%;
                }
                @media screen and (min-width: 750px) and (max-width: 1000px) {
                    width: 67.5%;
                }
                @media screen and (min-width: 320px) and (max-width: 750px) {
                    width: 87.5%;
                }
            }
            select, button {
                padding: .5% 1%;
                @media screen and (min-width: 1400px) {
                    width: 39.4%;
                }
                @media screen and (min-width: 1000px) and (max-width: 1400px) {
                    width: 41.3%;
                }
                @media screen and (min-width: 750px) and (max-width: 1000px) {
                    width: 69%;
                }
                @media screen and (min-width: 400px) and (max-width: 750px) {
                    width: 89%;
                }
                @media screen and (min-width: 320px) and (max-width: 400px) {
                    width: 90%;
                }
            }
        }
    }
`

export const Loading = styled.p `
    text-align: center;
    margin-top: 3vh;
`