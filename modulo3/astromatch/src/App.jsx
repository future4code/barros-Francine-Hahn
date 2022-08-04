import React, {useState} from 'react'
import {Header} from './components/Header/Header'
import {Matches} from './components/Matches/Matches'
import {Profiles} from './components/Profiles/Profiles'
import {GeneralContainer} from './globalStyle'


function App() {
  const [showMatches, setShowMatches] = useState(false)
  const [matches, setMatches] = useState([])


  return (
    <GeneralContainer>
      <Header showMatches={showMatches} setShowMatches={setShowMatches} setMatches={setMatches}/>
      {showMatches? <Matches matches={matches}/> : <Profiles/>}
    </GeneralContainer>
  )
}

export default App
