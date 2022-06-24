import React from "react";
import axios from "axios";

class CriarPlaylist extends React.Component {

    state = {
        playlist: [],
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
                console.log("playlist criada")
            })
            .catch((err) => {
                alert("Ja existe uma playlist com esse nome")
            })
    }

    render() {
        return (
            <div>
                <h1>Crie sua playlist</h1>
                <input
                    value={this.state.inputName}
                    onChange={this.handleName}
                    placeholder="Nome da Playlist"
                />
                <button onClick={this.createPlaylist}>Criar</button>
            </div>
        )
    }
}
export default CriarPlaylist