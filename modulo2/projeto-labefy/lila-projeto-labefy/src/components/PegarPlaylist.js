import React from "react";
import axios from "axios"

class PegarPlaylist extends React.Component {

    state = {
       lista: []
    }

    componentDidMount = () =>{
        this.getAllPlaylists()
    }

    getAllPlaylists = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get (url, {
            headers:  {Authorization: "jessica-moreno-freire"}
        })

        .then ((res) =>{
            this.setState({lista:res.data.result.list})
        })
        .catch((err)=>{
            alert(err.message)
        })

    }
    render(){
        console.log(this.state.lista)
        const listaAtualizada = this.state.lista.map((playlist)=>{
            return <div key={playlist.id}>{playlist.name}</div>
        })
        return(
            <div>
                <h2>Lista de Playlist</h2>
                <section>
                    {listaAtualizada}
                </section>
            </div>
        )
    }
}

export default PegarPlaylist