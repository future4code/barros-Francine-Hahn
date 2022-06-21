import img from './Francine.JPG';
import './App.css';

function apertarBotao() {
  alert('Boa noite!')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Olá! Eu sou a Francine!</h1>
        <img src={img} className="App-logo" alt="Foto da Francine" />
        <p className='App-paragrafo'>
          Este é o meu primeiro site React.
        </p>
        <button className='App-button' onClick={apertarBotao}>Aperte esse botão</button>
      </header>
    </div>
  );
}

export default App;
