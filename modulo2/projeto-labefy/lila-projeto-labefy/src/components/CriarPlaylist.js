import React from "react";
import axios from "axios";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const ButtonPegarPlaylist = styled.button``
const CriarContainer = styled.div``


class CriarPlaylist extends React.Component {

    state = {
        inputName: "",
    }

    handleName = (e) => {
        this.setState({ inputName: e.target.value })
    }

    createPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.inputName
        }

        axios.post(url, body, {
            headers: { Authorization: "jessica-moreno-freire" }
        })
            .then((res) => {
                alert(`Sucesso! Playlist ${this.state.inputName}criada`)
            })
            .catch((err) => {
                alert("Erro ao criar playlist")
            })
    }

    render() {
        return (
            <Body>

                <CriarContainer>
                    <h1>Bem Vinde!!</h1>
                    <h2>Crie sua playlist</h2>
                    <input
                        value={this.state.inputName}
                        onChange={this.handleName}
                        placeholder="Nome da Playlist"
                    />
                    <button onClick={this.createPlaylist}>Criar</button>
                </CriarContainer>
                <ButtonPegarPlaylist onClick={this.props.changeSection}>
                    Veja suas Playlists
                </ButtonPegarPlaylist>
            </Body>
        )
    }
}
export default CriarPlaylist