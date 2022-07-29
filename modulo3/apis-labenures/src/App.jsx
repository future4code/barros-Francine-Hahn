import React, { useState } from 'react'
import {CreateUser} from './components/CreateUser'
import {SearchUser} from './components/SearchUser'
import {ContainerGeral, Botao} from './style'

function App() {

  const [showNameSearch, setShowNameSearch] = useState(false)
  const [home, setHome] = useState(true)

  const handleSwitchPages = () => {
    setShowNameSearch(false)
    return setHome(!home)
  }

  return (
    <ContainerGeral>
      <Botao onClick={handleSwitchPages}>Trocar de tela</Botao>
      {home? <CreateUser/> : <SearchUser showName={showNameSearch} setShowName={setShowNameSearch}/>}
    </ContainerGeral>
  )
}

export default App
