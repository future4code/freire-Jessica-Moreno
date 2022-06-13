import React from "react"
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Agradecimento from "./components/Agradecimento"
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>
      case 4:
        return <Agradecimento/>
      default:
        return <Agradecimento/>

    }
  }

  proximaEtapa =() => {
    this.setState({etapa: this.state.etapa +1})
  }


  render() {

    return (
      <MainContainer>
        {this.renderizaEtapa()}
        <br/>    

        <button onClick={this.proximaEtapa}>Próxima etapa</button>
              

      </MainContainer>
    );

  }

}

export default App;


