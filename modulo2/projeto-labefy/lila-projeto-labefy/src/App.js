import React from "react";
import styled from "styled-components";
import CriarPlaylist from "./components/CriarPlaylist";
import PegarPlaylist from "./components/PegarPlaylist";

const Body = styled.div`
margin:0;
padding:0;
display:flex;
background-color: grey;
width:100%
`
const Header = styled.div``
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
        <Header></Header>
        <Main>
          {this.state.section === "criarPlaylist" ? (
            <CriarPlaylist changeSection ={this.changeSection}/>
          ):(
            <PegarPlaylist changeSection={this.changeSection} />
          )}
        </Main>


        
        

      </Body>
    );
  }
}

export default App;
