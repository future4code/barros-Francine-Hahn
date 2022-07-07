import React, {useState} from 'react';
import Post from './components/Post/Post';
import {MainContainer, Formulario} from './style';
import fotoFran from './img/Francine.JPG';
import fotoFabio from './img/homem-celular.jpg';
import fotoPost2 from './img/post2.jpg';
import fotoPost3 from './img/post3.jpg';

function App() {
  const [userName, setUserName] = useState('')
  const [userPhoto, setUserPhoto] = useState('')
  const [photoPost, setPhotoPost] = useState('')

  const [arrayPosts, setArrayPosts] = useState([{
    nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150"
  },
  {
    nomeUsuario: "fran",
    fotoUsuario: fotoFran,
    fotoPost: fotoPost2
  },
  {
    nomeUsuario: "fabio",
    fotoUsuario: fotoFabio,
    fotoPost: fotoPost3
  }])

  const handleInfoChange = (e) => {
    e.preventDefault()
    const arrayPostsAtualizado = [...arrayPosts, {nomeUsuario: userName, fotoUsuario: userPhoto, fotoPost: photoPost}]
    setUserName('')
    setUserPhoto('')
    setPhotoPost('')
    return setArrayPosts(arrayPostsAtualizado)
  }

  return (
    <MainContainer>
      {arrayPosts.map((item, index) => {
        return <Post key={index} nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost={item.fotoPost}/>
      })}

      <Formulario>
        <input type="text" value={userName}placeholder="Digite o seu nome" onChange={e => setUserName(e.target.value)}/>
        <input type="text" value={userPhoto} placeholder="Coloque o link da sua foto de usuário" onChange={e => setUserPhoto(e.target.value)}/>
        <input type="text" value={photoPost} placeholder="Coloque o link da foto que deseja compartilhar" onChange={e => setPhotoPost(e.target.value)}/>
        <button onClick={(e) => handleInfoChange(e)}>Enviar</button>
      </Formulario>
    </MainContainer>
  )
}


export default App;
