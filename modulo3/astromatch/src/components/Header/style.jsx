import styled from "styled-components";


export const HeaderSection = styled.header `
    padding: 0 0 1vh 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 2vh;
    button {
        background-color: white;
        :active {
            @keyframes active {
                from {transform: translate(3px)}
                to {transform: translate(-3px)}
            }
            animation: active 1s;
        }
        img {
            :hover {
                @keyframes opacity {
                    from {opacity: .5}
                    to {opacity: 1}
                }
                animation: opacity 2s;
            }
        }
    }
    div {
        display: flex;
        justify-content: center;
        h1 {
            color: #fe5324;
        }
    }

    @media screen and (min-width: 1400px) {
        height: 4vh;
        gap: 4.5vw;
        button {
            img {
                width: 2.5vw;
            }
        }
    }
    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        height: 4vh;
        gap: 11vw;
        button {
            margin-left: 1vw;
            img {
                width: 3.5vw;
            }
        }
    }
    @media screen and (min-width: 1000px) and (max-width: 1200px) {
        height: 4vh;
        gap: 10vw;
        button {
            margin-left: 0.5vw;
            img {
                width: 4vw;
            }
        }
    }
    @media screen and (min-width: 900px) and (max-width: 1000px) {
        height: 4vh;
        gap: 17vw;
        button {
            margin-left: 1vw;
            img {
                width: 5vw;
            }
        }
    }
    @media screen and (min-width: 800px) and (max-width: 900px) {
        height: 4vh;
        gap: 15vw;
        button {
            margin-left: 1vw;
            img {
                width: 6vw;
            }
        }
    }
    @media screen and (min-width: 600px) and (max-width: 800px) {
        height: 4vh;
        gap: 26vw;
        button {
            margin-left: 1vw;
            img {
                width: 7vw;
            }
        }
    }
    @media screen and (min-width: 500px) and (max-width: 600px) {
        height: 4vh;
        gap: 24vw;
        button {
            margin-left: 1vw;
            img {
                width: 8vw;
            }
        }
    }
    @media screen and (min-width: 320px) and (max-width: 500px) {
        height: 3vh;
        gap: 19vw;
        button {
            margin-left: 1vw;
            img {
                width: 9vw;
            }
        }
    }
`