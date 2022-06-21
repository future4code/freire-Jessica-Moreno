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
    
        request
          .then((response)=>{
            this.setState({lista: response.data.result.list})
          })
          .catch((error)=>{
            alert(error.message)
          })
      }

    render() {
        return (
            <div>
                <h1>Tela de Detalhes</h1>
                <section>
                    {this.lista.map((usuario) => {
                        return <p key={usuario.id}>{usuario.nome}</p>;
                    })}
                </section>
                <button onClick={this.props.onClickCadastrar}>Trocar de Tela</button>
            </div>
        )
    }
}

export default TelaDeDetalhes