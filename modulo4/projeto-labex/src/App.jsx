import React from 'react'
import {Router} from './components/Router'
import {GlobalStyle, GeneralContainer} from './GlobalStyle'
import { AuthContextProvider } from './contexts/AuthContext'


function App() {

  return (
    <GeneralContainer>
      <GlobalStyle/>
      <AuthContextProvider>
        <Router/>
      </AuthContextProvider>
    </GeneralContainer>
  )
}

export default App
