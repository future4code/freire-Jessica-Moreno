import React from "react";
import axios from "axios"
import styled from "styled-components";
import AdicinarMusica from "./AdicionarMusica"

const Body = styled.div`
  margin-left: 3%;
  margin-right: 19%;
  
`
const TituloVerPlaylist = styled.h2`
    font-size: 30px;
    margin: 10px 0;
`
const Playlists = styled.div`
display:flex;
width:120%;
justify-content: space-between;
margin: 20px 0;
border-bottom:2px solid white ;
:hover{
    background-color:#838F3B;
        cursor: pointer;

}
`

const ButtonDelete = styled.button`
    border: none;
    height: 20px;
    width:100px;
    background-color:#A117FC;
    color:white;
    font-size: 15px;
    :hover{
        background-color:#CC80FF;
        cursor: pointer;
    }`


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
    }`




class PegarPlaylist extends React.Component {

    state = {
        lista: [],
        id: "",
        name: "",
        playlistId: "",
        page: "pegarPlaylist"
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: { Authorization: "jessica-moreno-freire" }
        })

            .then((res) => {
                this.setState({ lista: res.data.result.list })
            })
            .catch((err) => {
                alert(err.message)
            })

    }
    deletePlaylist = (id) => {
        if (window.confirm("Quer mesmo deletar a playlist?")) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
            axios.delete(url, {
                headers: { Authorization: "jessica-moreno-freire" }
            })
                .then((res) => {
                    alert("Playlist excluida.")
                    this.PegarPlaylist()
                })
                .catch((err) => {
                    alert("Erro ao deletar")
                })

        }

    }
    changePage = (playlistId) => {
        if (this.state.page === "pegarPlaylist") {
            this.setState({ page: "adicionarMusica", playlistId: playlistId })
        } else {
            this.setState({ page: "pegarPlaylist", listId: "" })
        }
    }
    render() {

        return (
            <Body>
                {this.state.page === "pegarPlaylist" ? (
                    <div>
                        <TituloVerPlaylist>Lista de Playlist</TituloVerPlaylist>

                        {this.state.lista.map((playlist) => {
                            return (

                                <Playlists
                                    playlistId={playlist.id}
                                    onClick={() => this.changePage(playlist.id)}
                                >{playlist.name}
                                    <ButtonDelete onClick={() => this.deletePlaylist(playlist.id)}>
                                        deletar
                                    </ButtonDelete>
                                </Playlists>

                            )
                        })}

                        <ButtonBack onClick={this.props.changeSection}>voltar</ButtonBack>
                    </div>
                ) : (
                    <AdicinarMusica
                        playlistId={this.state.playlistId}
                        changePage={this.changePage} />
                )}
            </Body>
        )
    }
}

export default PegarPlaylist