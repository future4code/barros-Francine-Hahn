import React, { useState } from 'react'
import {GeneralContainer, ProfilesSection} from './GlobalStyle'
import {Header} from './components/Header/Header'
import {Matches} from './components/Matches/Matches'
import {ProfileCard} from './components/ProfileCard/ProfileCard'


function App() {

  const [showMatches, setShowMatches] = useState(false)
  const [matches, setMatches] = useState([])
  
  return (
    <GeneralContainer>
      <ProfilesSection>
          <Header showMatches={showMatches} setShowMatches={setShowMatches} setMatches={setMatches}/>
          {showMatches? <Matches matches={matches}/> : <ProfileCard/>}
      </ProfilesSection>
    </GeneralContainer>
  )
}

export default App
