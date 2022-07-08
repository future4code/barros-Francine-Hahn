import React from 'react';
import {SecaoCentral, Mensagens, Formulario, Cabecalho} from './style';
import {useState} from 'react';
import {Msg} from './Components/Msg';
import {Header} from './Components/Header';
import logo from './img/logo-labenu.png';
import iconeCelular from './img/icone-celular.png';
import iconeCamera from './img/icone-camera.png';



function App() {
  const [inputName, setInputName] = useState('')
  const [inputMsg, setInputMsg] = useState('')
  const [arrayMsg, setArrayMsg] = useState([])
    
  function handleSubmit(e) {
    e.preventDefault()
    const newMessage = {nome: inputName, msg: inputMsg}
    setArrayMsg([...arrayMsg, newMessage])
    setInputMsg('')
  }

  function handlePressEnter(e) {
    if (e.charCode === 13) {
      handleSubmit(e)
    }
  }

  function handleOnClick(indexRemove) {
    const arrayAtualizado = arrayMsg.filter((item, index) => {
      return index !== indexRemove
    })
    return setArrayMsg(arrayAtualizado)
  }

  return (
    <SecaoCentral>
      <Cabecalho>
        <Header iconeDoGrupo={logo} nomeDoGrupo={'Grupo Labenu'} iconeCelular={iconeCelular} iconeCamera={iconeCamera}/>
      </Cabecalho>
      <Mensagens>
        {
          arrayMsg.map((item, index) => <Msg key={index} nome={item.nome} mensagem={item.msg} remove={() => handleOnClick(index)}/>)
        }       
      </Mensagens>
      <Formulario>
        <input type='text' required value={inputName} placeholder='Nome' onChange={e => setInputName(e.target.value)} onKeyPress={(e) => handlePressEnter(e)}/>
        <input type='text' required value={inputMsg} placeholder='Mensagem' onChange={e => setInputMsg(e.target.value)} onKeyPress={(e) => handlePressEnter(e)}/>
        <button onClick={(e) => handleSubmit(e)}>Enviar</button>
      </Formulario>
    </SecaoCentral>
  );
}

export default App;
