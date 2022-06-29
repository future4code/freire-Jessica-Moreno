import React from "react";
import styled from "styled-components";
import CriarPlaylist from "./components/CriarPlaylist";
import PegarPlaylist from "./components/PegarPlaylist";
import GlobalStyle from "./styles/global";


const Body = styled.div`
background-color:black;
color:White;
height:100vh;
`

const Header = styled.div`
    display:flex;
    justify-content: center;
    height: 150px;
    background-color:#6500A8;
    font-size:30px;
    align-items:center ;
    color:#BAD600;

    
    `
const Main = styled.div``

class App extends React.Component {
  state = {
    section: "criarPlaylist"
  }

  changeSection = () =>{
    if(this.state.section === "criarPlaylist") {
      this.setState({section: "pegarPlaylist"})
    }else {
      this.setState({section:"criarPlaylist"})
    }
  }
  render() {

    return (
      <Body>
        
        <Header>
          <h1><strong>Labefy</strong></h1>
        </Header>
        <Main>
          {this.state.section === "criarPlaylist" ? (
            <CriarPlaylist changeSection ={this.changeSection}/>
          ):(
            <PegarPlaylist changeSection={this.changeSection} />
          )}
        </Main>


        
        
        <GlobalStyle/>
      </Body>
    );
  }
}

export default App;
