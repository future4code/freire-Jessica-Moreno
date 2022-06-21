import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;`

function App() {



  return (
    <MainContainer>
      <div className='Mensagem'>
        Mensagem
      </div>
      <div className='Inputs'>
        <input
          placeholder={'Usuario'}
          value={this.state.valorInputNomeRemetente}
          onChange={this.onChangeInputNomeRemetente}
        />
        <input
          placeholder={'Memsagem'}
          value={this.state.valorInputMensagem}
          onChange={this.onChangeInputMensagem}
        />
        <button onClick={this.adicionarPost}>Enviar</button>
      </div>
    </MainContainer>

  );
}

export default App;
