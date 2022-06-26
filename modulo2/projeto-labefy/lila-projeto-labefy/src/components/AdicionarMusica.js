import React from "react";
import axios from "axios"
import styled from "styled-components";

;
const Body = styled.div`
  margin-left: 3%;
  >div>h2{
    margin:10px 0;
  }
  
`;

const Input = styled.div`
>p{
    font-size:30px;
    margin: 10px 0;
}
>input{
    width:300px;
    height:35px;
    font-size:20px;
    padding:5px
}
`
const Button = styled.button`
  border: none;
  height: 35px;
  width:100px;
  background-color:#A117FC;
  color:white;
  font-size: 20px;
  :hover{
      background-color:#838F3B;
  
    cursor: pointer;
  }
`

const DeletarMusica = styled.button`
border: none;
    height: 20px;
    width:20px;
    background-color:#A117FC;
    color:white;
    font-size: 15px;
    :hover{
        background-color:#838F3B;
        cursor: pointer;
    }
`

const ButtonBack = styled.button`
border: none;
    height: 50px;
    width:100px;
    background-color:#A117FC;
    color:white;
    font-size: 30px;
    :hover{
        background-color:#838F3B;
        cursor: pointer;
    }
`;
const Music = styled.div``
class AdicionarMusica extends React.Component {

    state = {
        nomeMusica:"",
        nomeArtista:"",
        linkMusica:"",
        musicas:[],
        listEdit:"edit"
    }
    componentDidMount (){
        this.getPlaylistTracks()
    }

    getPlaylistTracks = () =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`
        axios.get(url,{
            headers: {Authorization:"jessica-moreno-freire"}
        })
        .then((res)=>{
            this.setState({musicas:res.data.result.tracks})
        })
        .catch((err)=>{
            
        })
    }

    changePlaylistEdit = () => {
        if (this.state.listEdit === "edit") {
          this.setState({ listEdit: "playlistEditForm" });
        } else {
          this.setState({ listEdit: "edit" });
        }
      };

    handleNomeMusica = (e) => {
        this.setState({nomeMusica:e.target.value})
    }
    handleNomeArtista = (e) => {
        this.setState({nomeArtista:e.target.value})
    }
    handleLinkMusica = (e) => {
        this.setState({linkMusica:e.target.value})
    }

    addTrackToPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.nomeArtista,
            url: this.state.linkMusica
        }

        axios.post (url, body, {
            headers:{ Authorization: "jessica-moreno-freire" }
        })

        .then((res) => {
            this.setState({nomeMusica:"", nomeArtista:"", linkMusica:"",})
            this.getPlaylistTracks()
            this.changePlaylistEdit()
            alert("Musica Adicionada")
        })
        .catch((err) => {
            alert(err.message.data)
        })

    }

    removeTrackFromPlaylist = (id, musicId) =>{
        if(window.confirm("Quer mesmo excluir essa musica?")){
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks/${musicId}`
            axios.delete(url, {
                headers:{Authorization:"jessica-moreno-freire"}
            })
            .then((res)=>{
                alert("Musica excluida da playlist.")
                this.getPlaylistTracks()
            })
            .catch((err)=>{
                alert("erro, tente novamente")
            })
        }
    }

    render(){
        const listaDeMusica = this.state.musicas.map((music)=>{
            return <div key={music.id}>
                <p>Artista: {music.name} <br/>Musica: {music.artist}</p>
                <audio src={music.link}controls></audio>
                <DeletarMusica onClick={()=> this.removeTrackFromPlaylist(this.props.playlistId, music.id)}>X</DeletarMusica>
            </div>
        })
        
        
        return(
            <Body>
                
                <Input>
                <p>Adicione música a playlist</p>
                <input
                placeholder="Nome da Musica"
                value={this.state.nomeMusica}
                onChange={this.handleNomeMusica}
                />
                <input
                placeholder="Artista"
                value={this.state.nomeArtista}
                onChange={this.handleNomeArtista}
                />
                <input
                placeholder="Link da música"
                value={this.state.linkMusica}
                onChange={this.handleLinkMusica}
                />
                <Button onClick={this.addTrackToPlaylist}>Salvar</Button>
                </Input>
                <div>
                    <h2>Músicas</h2>
                    <Music>{listaDeMusica}</Music>
                </div>
                <ButtonBack onClick={this.props.changePage}>Voltar</ButtonBack>
            </Body>
        )
    }

}
export default AdicionarMusica