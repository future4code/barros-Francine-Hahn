import React, {useState} from 'react'
import axios from 'axios'
import {Header} from './components/Header/Header'
import {Matches} from './components/Matches/Matches'
import {Profiles} from './components/Profiles/Profiles'
import {GeneralContainer} from './globalStyle'

function App() {
  const [showMatches, setShowMatches] = useState(false)
  const [matches, setMatches] = useState([])

  const handleClear = () => {
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/clear').then(
      response => console.log(response.data)
    ).catch(err => console.log(err))
  }

  return (
    <main>
      <GeneralContainer>
        <Header setShowMatches={setShowMatches} setMatches={setMatches}/>
        {showMatches? <Matches matches={matches}/> : <Profiles/>}
      </GeneralContainer>
      <button onClick={handleClear}>Limpar matches e perfis vistos</button>
    </main>
  )
}

export default App
