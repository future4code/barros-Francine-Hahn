import React, {useState} from 'react';
import {PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter} from '../../style';

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeSalvoBranco from '../../img/bookmark_border.svg'
import iconeSalvoPreto from '../../img/bookmark_black.svg'
import iconeCompartilhar from '../../img/send.svg'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'



function Post(props){
  const [arrayPost, setArrayPost] = useState(
    {'numeroCurtidas': 0,
    'curtido': 'false',
    'numeroComentarios': 0,
    'comentando': 'false',
    'salvo': 'false',
    'numeroSalvamentos': 0,
    'compartilhando': 'false',
    'numeroCompartilhamentos': 0})
  

  //Cor do coração quando usuário clica no ícone
  let iconeCurtida
  if(arrayPost.curtido === 'true') {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  //Quando o usuário clica no ícone de coração
  const onClickCurtida = () => {
    console.log('Curtiu!')
    if (arrayPost.curtido === 'false') {
      setArrayPost({'numeroCurtidas': arrayPost.numeroCurtidas + 1,
        'curtido': 'true',
        'numeroComentarios': arrayPost.numeroComentarios,
        'comentando': arrayPost.comentando,
        'salvo': arrayPost.salvo,
        'numeroSalvamentos': arrayPost.numeroSalvamentos,
        'compartilhando': arrayPost.compartilhando,
        'numeroCompartilhamentos': arrayPost.numeroCompartilhamentos})
    } else {
      setArrayPost({'numeroCurtidas': arrayPost.numeroCurtidas - 1,
        'curtido': 'false',
        'numeroComentarios': arrayPost.numeroComentarios,
        'comentando': arrayPost.comentando,
        'salvo': arrayPost.salvo,
        'numeroSalvamentos': arrayPost.numeroSalvamentos,
        'compartilhando': arrayPost.compartilhando,
        'numeroCompartilhamentos': arrayPost.numeroCompartilhamentos})
    }
  }
  
  //Quando o usuário clica no ícone de comentário
  let componenteComentario
  const onClickComentario = () => {
    setArrayPost({'numeroCurtidas': arrayPost.numeroCurtidas,
      'curtido': arrayPost.curtido,
      'numeroComentarios': arrayPost.numeroComentarios,
      'comentando': 'true',
      'salvo': arrayPost.salvo,
      'numeroSalvamentos': arrayPost.numeroSalvamentos,
      'compartilhando': arrayPost.compartilhando,
      'numeroCompartilhamentos': arrayPost.numeroCompartilhamentos})
    if(arrayPost.comentando === 'false') {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }
    console.log(arrayPost.comentando)
  }
  

  //Quando o usuário clica no botão enviar comentário
  const aoEnviarComentario = () => {
    setArrayPost({'numeroCurtidas': arrayPost.numeroCurtidas,
      'curtido': arrayPost.curtido,
      'numeroComentarios': arrayPost.numeroComentarios + 1,
      'comentando': 'falso',
      'salvo': arrayPost.salvo,
      'numeroSalvamentos': arrayPost.numeroSalvamentos,
      'compartilhando': arrayPost.compartilhando,
      'numeroCompartilhamentos': arrayPost.numeroCompartilhamentos})
  }

  //Após o envio do comentário, a sessão de comentários desaparece
  if(arrayPost.comentando === 'true') {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
  }

  //Cor do ícone de salvamento quando usuário clica no ícone
  let iconeSalvar
  if(arrayPost.salvo === 'true') {
    iconeSalvar = iconeSalvoPreto
  } else {
    iconeSalvar = iconeSalvoBranco
  }

  //Quando usuário clica no ícone de salvar
  const onClickSalvar = () => {
    if (arrayPost.salvo === 'false') {
      setArrayPost({'numeroCurtidas': arrayPost.numeroCurtidas,
      'curtido': arrayPost.curtido,
      'numeroComentarios': arrayPost.numeroComentarios,
      'comentando': arrayPost.comentando,
      'salvo': 'true',
      'numeroSalvamentos': arrayPost.numeroSalvamentos + 1,
      'compartilhando': arrayPost.compartilhando,
      'numeroCompartilhamentos': arrayPost.numeroCompartilhamentos})
    } else {
      setArrayPost({'numeroCurtidas': arrayPost.numeroCurtidas,
      'curtido': arrayPost.curtido,
      'numeroComentarios': arrayPost.numeroComentarios,
      'comentando': arrayPost.comentando,
      'salvo': 'false',
      'numeroSalvamentos': arrayPost.numeroSalvamentos - 1,
      'compartilhando': arrayPost.compartilhando,
      'numeroCompartilhamentos': arrayPost.numeroCompartilhamentos})
    }
  }

  //Quando o usuário clica no ícone de compartilhamento
  let componenteCompartilhar
  const onClickCompartilhar = () => {
    setArrayPost({'numeroCurtidas': arrayPost.numeroCurtidas,
      'curtido': arrayPost.curtido,
      'numeroComentarios': arrayPost.numeroComentarios,
      'comentando': arrayPost.comentando,
      'salvo': arrayPost.salvo,
      'numeroSalvamentos': arrayPost.numeroSalvamentos,
      'compartilhando': 'true',
      'numeroCompartilhamentos': arrayPost.numeroCompartilhamentos})
    if(arrayPost.compartilhando === 'false') {
      componenteCompartilhar = <SecaoCompartilhar aoClicarInstagram={aoCompartilharInstagram} aoClicarFacebook={aoCompartilharFacebook} aoClicarTwitter={aoCompartilharTwitter}/>
    }
  }
  
  //Quando o usuário clica no botão compartilhar no Instagram
  const aoCompartilharInstagram = () => {
    setArrayPost({'numeroCurtidas': arrayPost.numeroCurtidas,
      'curtido': arrayPost.curtido,
      'numeroComentarios': arrayPost.numeroComentarios,
      'comentando': arrayPost.comentando,
      'salvo': arrayPost.iconeSalvoPreto,
      'numeroSalvamentos': arrayPost.numeroSalvamentos,
      'compartilhando': 'false',
      'numeroCompartilhamentos': arrayPost.numeroCompartilhamentos + 1})
    console.log('Você compartilhou no seu Instagram!')
  }

  //Quando o usuário clica no botão compartilhar no Facebook
  const aoCompartilharFacebook = () => {
    setArrayPost({'numeroCurtidas': arrayPost.numeroCurtidas,
      'curtido': arrayPost.curtido,
      'numeroComentarios': arrayPost.numeroComentarios,
      'comentando': arrayPost.comentando,
      'salvo': arrayPost.iconeSalvoPreto,
      'numeroSalvamentos': arrayPost.numeroSalvamentos,
      'compartilhando': 'false',
      'numeroCompartilhamentos': arrayPost.numeroCompartilhamentos + 1})
    console.log('Você compartilhou no seu Facebook!')
  }

  //Quando o usuário clica no botão compartilhar no Twitter
  const aoCompartilharTwitter = () => {
    setArrayPost({'numeroCurtidas': arrayPost.numeroCurtidas,
      'curtido': arrayPost.curtido,
      'numeroComentarios': arrayPost.numeroComentarios,
      'comentando': arrayPost.comentando,
      'salvo': arrayPost.iconeSalvoPreto,
      'numeroSalvamentos': arrayPost.numeroSalvamentos,
      'compartilhando': 'false',
      'numeroCompartilhamentos': arrayPost.numeroCompartilhamentos + 1})
    console.log('Você compartilhou no seu Twitter!')
  }

  if(arrayPost.compartilhando === 'true') {
    componenteCompartilhar = <SecaoCompartilhar aoClicarInstagram={aoCompartilharInstagram} aoClicarFacebook={aoCompartilharFacebook} aoClicarTwitter={aoCompartilharTwitter}/>
  }

  return(
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida} 
          onClickIcone={onClickCurtida}
          valorContador={arrayPost.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={arrayPost.numeroComentarios}
        />

        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={onClickSalvar}
          valorContador={arrayPost.numeroSalvamentos}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={onClickCompartilhar}
          valorContador={arrayPost.numeroCompartilhamentos}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  )
}


export default Post