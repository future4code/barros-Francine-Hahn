import React from 'react';
import './style.js';
import { Container, Cabecalho, SecaoPrincipal, LateralEsquerda, LateralDireita, SecaoCentral, Rodape } from './style.js';
import logo from './labenu.png';
import { Form } from './Components/Form.js';

function App() {
  return (
    <Container>
      <Cabecalho>
        <img src={logo}/>
        <h1>LabZap</h1>
      </Cabecalho>
      <SecaoPrincipal>
        <LateralEsquerda/>
        <SecaoCentral>
          <Form label1={'Remetente'} label2={'Msg'}/>
        </SecaoCentral>
        <LateralDireita/>
      </SecaoPrincipal>
      <Rodape>
        <p>Copyright &copy; 2022 Francine Hahn All rights reserved.</p>
      </Rodape>
    </Container>
  );
}

export default App;
