import React from "react";
import axios from "axios"
import styled from "styled-components";
import AdicinarMusica from "./AdicionarMusica"

const Body = styled.div`
  margin-left: 3%;
  margin-right: 19%;
`;

const ButtonBack = styled.button``

const Playlists = styled.div``

const ButtonDelete = styled.button``


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
                        <ButtonBack onClick={this.props.changeSection}>voltar</ButtonBack>
                        <ul>
                            <h2>Lista de Playlist</h2>
                            {this.state.lista.map((playlist) => {
                                return (
                                    <li>
                                        <Playlists
                                            playlistId={playlist.id}
                                            onClick={() => this.changePage(playlist.id)}
                                        >{playlist.name}</Playlists>
                                        <ButtonDelete onClick={() => this.deletePlaylist(playlist.id)}>
                                            deletar
                                        </ButtonDelete>
                                    </li>
                                )
                            })}
                        </ul>
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