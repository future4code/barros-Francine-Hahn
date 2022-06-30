import React, {useState} from 'react'
import './style.css'

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
  const [state, setState] = useState({
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    numeroSalvamentos: 0,
    compartilhando: false,
    numeroCompartilhamentos: 0
  })

  const [numeroCurtidas, setNumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [salvo, setSalvo] = useState(false)
  const [numeroSalvamentos, setNumeroSalvamentos] = useState(0)
  const [compartilhando, setCompartilhando] = useState(false)
  const [numeroCompartilhamentos, setNumeroCompartilhamentos] = useState(0)

  //Cor do coração quando usuário clica no ícone
  let iconeCurtida
  if(curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  //Quando o usuário clica no ícone de coração
  const onClickCurtida = () => {
    console.log('Curtiu!')
    if (!curtido) {
      setNumeroCurtidas(numeroCurtidas + 1)
      setCurtido(!curtido)
    } else {
      setNumeroCurtidas(numeroCurtidas - 1)
      setCurtido(!curtido)
    }
  }
  
  //Quando o usuário clica no ícone de comentário
  let componenteComentario
  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }
    console.log(comentando)
  }
  

  //Quando o usuário clica no botão enviar comentário
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  //Não entendi porque esse código precisa se repetir para a sessão comentário aparecer
  if(comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
  }

  //Cor do ícone de salvamento quando usuário clica no ícone
  let iconeSalvar
  if(salvo) {
    iconeSalvar = iconeSalvoPreto
  } else {
    iconeSalvar = iconeSalvoBranco
  }

  //Quando usuário clica no ícone de salvar
  const onClickSalvar = () => {
    if (!salvo) {
      setNumeroSalvamentos(numeroSalvamentos + 1)
      setSalvo(!salvo)
    } else {
      setNumeroSalvamentos(numeroSalvamentos - 1)
      setSalvo(!salvo)
    }
  }

  //Quando o usuário clica no ícone de compartilhamento
  let componenteCompartilhar
  const onClickCompartilhar = () => {
    setCompartilhando(!compartilhando)
    if(compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar aoClicarInstagram={aoCompartilharInstagram} aoClicarFacebook={aoCompartilharFacebook} aoClicarTwitter={aoCompartilharTwitter}/>
    }
  }
  
  //Quando o usuário clica no botão compartilhar no Instagram
  const aoCompartilharInstagram = () => {
    setNumeroCompartilhamentos(numeroCompartilhamentos + 1)
    console.log('Você compartilhou no seu Instagram!')
  }

  //Quando o usuário clica no botão compartilhar no Facebook
  const aoCompartilharFacebook = () => {
    setNumeroCompartilhamentos(numeroCompartilhamentos + 1)
    console.log('Você compartilhou no seu Facebook!')
  }

  //Quando o usuário clica no botão compartilhar no Twitter
  const aoCompartilharTwitter = () => {
    setNumeroCompartilhamentos(numeroCompartilhamentos + 1)
    console.log('Você compartilhou no seu Twitter!')
  }

  if(compartilhando) {
    componenteCompartilhar = <SecaoCompartilhar aoClicarInstagram={aoCompartilharInstagram} aoClicarFacebook={aoCompartilharFacebook} aoClicarTwitter={aoCompartilharTwitter}/>
  }

  return(
    <div className = 'PostContainer'>
      <div className = 'PostHeader'>
        <img className = 'UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </div>

      <img className = 'PostPhoto'src={props.fotoPost} alt={'Imagem do post'}/>

      <div className = 'PostFooter'>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />

        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={onClickSalvar}
          valorContador={numeroSalvamentos}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={onClickCompartilhar}
          valorContador={numeroCompartilhamentos}
        />
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  )
}


export default Post