import React from 'react';
import Post from './components/Post/Post';
import {MainContainer} from './style';
import fotoFran from './img/Francine.JPG';
import fotoFabio from './img/homem-celular.jpg';
import fotoPost2 from './img/post2.jpg';
import fotoPost3 from './img/post3.jpg';

function App() {
  const arrayPosts = [{
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
  }]

  return (
    <MainContainer>
      {arrayPosts.map((item) => {
        return <Post nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost={item.fotoPost}/>
      })}
    </MainContainer>
  )
}


export default App;
