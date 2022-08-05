import React, { useState } from 'react'
import {GeneralContainer, ProfilesSection} from './GlobalStyle'
import {Header} from './components/Header/Header'
import {Matches} from './components/Matches/Matches'
import {ProfileCard} from './components/ProfileCard/ProfileCard'
import img from './img/icon-broken-heart.png'


function App() {

  const [showMatches, setShowMatches] = useState(false)
  const [matches, setMatches] = useState([])
  
  return (
    <GeneralContainer>
      <ProfilesSection image={img}>
          <Header showMatches={showMatches} setShowMatches={setShowMatches} setMatches={setMatches}/>
          {showMatches? <Matches matches={matches}/> : <ProfileCard/>}
      </ProfilesSection>
    </GeneralContainer>
  )
}

export default App
