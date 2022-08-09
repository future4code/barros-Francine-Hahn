import React from 'react'
import {Router} from './components/Router'
import {Footer} from './components/Footer/Footer'
import {GlobalStyle, GeneralContainer} from './GlobalStyle'


function App() {

  return (
    <GeneralContainer>
      <GlobalStyle/>
      <Router/>
      <Footer/>
    </GeneralContainer>
  )
}

export default App
