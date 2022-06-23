import React from "react";
// import styled from "styled-components";
import axios from "axios";

class TelaDeDetalhes extends React.Component {
    state = {
        lista: []
    }

    componentDidMount = () =>{
        this.getUsers()
      }

    getUsers = ()=>{
        const request = axios.get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          {
            headers: {Authorization: "jessica-moreno-freire"}
          }
        )
    
        
          .then((response)=>{
            this.setState({lista: response.data})
          })
          .catch((error)=>{
            alert(error.message)
          })
      }

      deletarUsuario = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete (url, {
          headers: {Authorization: "jessica-moreno-freire"}
        })
        .then((response)=>{
          alert("usuario deletado")
          this.getUsers()
        })
        .catch((error) =>{
          alert(error.message)
        })
      }

    render() {
       const listaAtualizada = this.state.lista.map((usuario) => {
            return <div key={usuario.id}>
                {usuario.name}<button onClick={()=>this.deletarUsuario(usuario.id)}>-</button>
            </div>
        })
        return (
            <div>
                <h1>Tela de Detalhes</h1>
                <section>
                   {listaAtualizada}
                </section>
                <button onClick={this.props.onClickCadastrar}>Trocar de Tela</button>
            </div>
        )
    }
}

export default TelaDeDetalhes