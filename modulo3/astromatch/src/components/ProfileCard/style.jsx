import styled from "styled-components";


export const Card = styled.section `
    section {
        background-color: #ffffffb1;
        position: relative;
        h3 {
            padding: 10px 15px 5px 15px;
        }
        p {
            padding: 0 15px 10px 15px;
        }
        @media screen and (min-width: 1400px) {
            min-height: 14vh;
            margin-top: -17vh;
        }
        @media screen and (min-width: 1000px)  and (max-width: 1400px) {
            min-height: 14vh;
            margin-top: -17vh;
        }
        @media screen and (min-width: 600px) and (max-width: 1000px) {
            min-height: 14vh;
            margin-top: -18vh;
        }
        @media screen and (min-width: 420px) and (max-width: 600px) {
            min-height: 14vh;
            margin-top: -18vh;
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
            min-height: 12vh;
            margin-top: -19vh;
        }
    }
`

export const MatchTitle = styled.h2 `
    opacity: 0;
    font-size: 1px;
    color: white;
    border-radius: 5px;
    background: linear-gradient(45deg, red, #ff6600,#f63e75, #f9164b);
    text-align: center;
    @keyframes appear {
        from {
            opacity: 1;
            font-size: 2rem;
            padding: 10px 0;
            transformY: translate(100px);
        }
        to {
            opacity: 0;
            font-size: 1px;
            transformY: translate(0px);
        }
    }
    animation: appear 4s;
`


export const Photo = styled.img `
    width: 100%;
    border-radius: 5px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.393);

    @media screen and (min-width: 1200px) {
        height: 60vh;
    }
    @media screen and (min-width: 1000px) and (max-width: 1200px) {
        height: 60vh;
    }
    @media screen and (min-width: 600px) and (max-width: 1000px) {
        height: 70vh;
    }
    @media screen and (min-width: 480px) and (max-width: 600px) {
        height: 65vh;
    }
    @media screen and (min-width: 320px) and (max-width: 480px) {
        height: 58vh;
    }
`


export const ButtonSection = styled.div `
    display: flex;
    justify-content: space-around;
    
    @keyframes hover {
        from {opacity: .5}
        to {opacity: 1}
    }

    @keyframes activeAnimation {
        from {transform: translateY(3px)}
        to {transform: translateY(-3px)}
    }

    button {
        background-color: white;
        border: 8px solid #eaeaea;
        border-radius: 50%;
        :hover {
            animation: hover 2s;
        }
        :active {
            animation: activeAnimation 1s;
        }
        img {
            border-radius: 50%;
        }
    }
    @media screen and (min-width: 1400px) {
        margin: 5vh 0 0 0;
        img {
            width: 3.5vw;
        }
    }
    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        margin: 5.5vh 0 1vh 0;
        img {
            width: 4.5vw;
        }
    }
    @media screen and (min-width: 1000px) and (max-width: 1200px) {
        margin: 5vh 0 1vh 0;
        img {
            width: 5vw;
        }
    }
    @media screen and (min-width: 800px) and (max-width: 1000px) {
        margin: 7vh 0 1vh 0;
        img {
            width: 7vw;
        }
    }
    @media screen and (min-width: 600px) and (max-width: 800px) {
        margin: 6vh 0 1vh 0;
        img {
            width: 10vw;
        }
    }
    @media screen and (min-width: 480px) and (max-width: 600px) {
        margin: 6vh 0 1vh 0;
        img {
            width: 12.5vw;
        }
    }
    @media screen and (min-width: 420px) and (max-width: 480px) {
        margin: 6vh 0 1vh 0;
        img {
            width: 13vw;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
        margin: 9vh 0 1vh 0;
        img {
            width: 13.5vw;
        }
    }
`