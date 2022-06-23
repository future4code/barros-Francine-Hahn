import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './Francine.JPG';
import foto2 from './fisioterapia.jpg';
import foto3 from './contato.png';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto}
          nome="Francine Hahn"
          descricao="Olá, eu sou a Francine! Eu sou formada em fisioterapia e mestre em Ciências da Reabilitação.

          Durante meus dois anos de mestrado, trabalhei como assistente de pesquisa, adquirindo habilidades em análise estatística e análise de dados. Esse período foi crucial para a minha decisão em fazer uma transição de carreira, pois percebi que meu interesse se dava no campo das exatas e do raciocínio lógico."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>  
        <CardGrande 
          imagem={foto2}
          nome="Clínica de fisioterapia" 
          descricao="Atendimento de pacientes na área de traumato-ortopedia" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      <div className="page-section-container">
        <h2>Contato e endereço</h2>
        <CardPequeno
          icone={foto3}
          email={'fran_hahn@hotmail.com'}
          endereco={'Rua 24 de Outubro, 65, Porto Alegre/RS'}
        />
      </div>
    </div>
  );
}

export default App;
