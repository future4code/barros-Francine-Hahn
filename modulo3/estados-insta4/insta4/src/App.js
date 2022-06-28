import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import fotoFran from './img/Francine.JPG'
import fotoFabio from './img/homem-celular.jpg'
import post2 from './img/post2.jpg'
import post3 from './img/post3.jpg'

function App() {
  return(
    <div className='MainContainer'>
            <Post
              nomeUsuario={'paulinha'}
              fotoUsuario={'https://picsum.photos/50/50'}
              fotoPost={'https://picsum.photos/200/150'}
            />
            <Post
              nomeUsuario={'fran'}
              fotoUsuario={fotoFran}
              fotoPost={post2}
            />
            <Post
              nomeUsuario={'fabio'}
              fotoUsuario={fotoFabio}
              fotoPost={post3}
            />
    </div>
  )
}


export default App;
