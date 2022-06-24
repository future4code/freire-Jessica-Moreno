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

function App() {
  return (
    <Body>
      
        <CriarPlaylist/>
        <PegarPlaylist/>
      
    </Body>
  );
}

export default App;
