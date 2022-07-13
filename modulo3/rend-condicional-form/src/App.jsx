import React, {useState} from 'react'
import {DadosGerais} from './components/DadosGerais'
import {Agradecimento} from './components/Agradecimento'

function App() {
  const [agradecimento, setAgradecimento] = useState(false)
  
  if (agradecimento) {
    return <Agradecimento/>
  } else {
    return <DadosGerais setPaginaAgradecimento={setAgradecimento}/>
  }
}

export default App
