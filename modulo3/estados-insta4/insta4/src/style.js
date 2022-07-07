import styled from "styled-components";

export const MainContainer = styled.section `
    margin: 30px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center
`

export const PostContainer = styled.section `
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px
`

export const PostHeader = styled.section `
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px
`

export const UserPhoto = styled.img ` 
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%
`

export const PostFooter = styled.section ` 
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-around;
`

    
export const PostPhoto = styled.img `
    width: 100%;
`

export const IconContainer = styled.section `
    display: flex;
`

export const IconImage = styled.img ` 
	margin-right: 5px;
`


export const CommentContainer = styled.section `
    display: flex;
    justify-content: center;
    padding: 5px
`


export const InputComentario = styled.input ` 
    width: 100%;
    margin-right: 5px
`


export const ContainerBotoes = styled.section `
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 7px 0;
`

export const Botao = styled.button `
    cursor: pointer;
`



