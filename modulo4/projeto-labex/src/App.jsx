import React from 'react'
import {Router} from './components/Router'
import {GlobalStyle, GeneralContainer} from './GlobalStyle'


function App() {

  return (
    <GeneralContainer>
      <GlobalStyle/>
      <Router/>
    </GeneralContainer>
  )
}

export default App
