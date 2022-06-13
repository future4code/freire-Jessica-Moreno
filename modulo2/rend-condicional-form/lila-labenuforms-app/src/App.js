import React from "react"
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Agradecimento from "./components/Agradecimento"

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
      <div>
        {this.renderizaEtapa()}       

        <button onClick={this.proximaEtapa}>Próxima etapa</button>
              

      </div>
    );

  }

}

export default App;


