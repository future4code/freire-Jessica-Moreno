import React from "react";
import './App.css';
// import axios from "axios";
import Cadastro from "./pages/Cadastro";
import TelaDeDetalhes from "./pages/TelaDeDetalhes";


class App extends React.Component {

  state = {
    trocarTela: true
  }
  cadastrar =() => {
    this.setState({trocarTela: true})
  }

  verLista =() =>{
    this.setState({trocarTela: false})
  }

     

  render(){
    let pagina
    if(this.state.trocarTela) {
      pagina = <Cadastro onClickVerLista={this.verLista}/>
    }else {
      pagina =<TelaDeDetalhes onClickCadastrar={this.cadastrar}/>
    }
    return (
    <div className="App">
      {pagina}
    </div>
  );
  }
  
}

export default App;
