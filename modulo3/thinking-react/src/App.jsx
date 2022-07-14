import React from 'react'
import {Filtro} from './components/Filtro'
import {Produtos} from './components/Produtos'
import {Carrinho} from './components/Carrinho'
import {ContainerGeral} from './style'


function App() {

  return (
    <ContainerGeral>
      <Filtro/>
      <Produtos/>
      <Carrinho/>
    </ContainerGeral>
  )
}

export default App
