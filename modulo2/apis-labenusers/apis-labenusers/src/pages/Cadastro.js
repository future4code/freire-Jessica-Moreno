import React from "react";
// import styled from "styled-components"
import axios from "axios";


class Cadastro extends React.Component {
    state = {
        
    usuario:[
        {
          nome:"",
          email:"",
        }
      ],
      inputName:"",
      inputEmail:"",
    }
    
    onChangeInputName = (event) =>{
        this.setState({inputName: event.target.value})
      }
    
      onChangeInputEmail = (event) =>{
        this.setState({inputEmail: event.target.value})
      }
    createUser = (event) =>{
        const body = {
          name: this.state.inputName,
          email: this.state.inputEmail
        }
        const request = axios.post (
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          body,
          {
            headers: {Authorization: "jessica-moreno-freire"}
          }
        )
    
        request
          .then((response)=>{
            alert(response.data)
            this.props.getUsers()
          })
          .catch((error)=>{
            alert(error.message)
          })
      }
    render() {
        return (
            <div>
                <h1>Cadastre-se</h1>
                <br />
                <section>
                    <label>Nome:</label>
                    <input
                        value={this.state.inputName}
                        onChange={this.onChangeInputName}
                        placeholder="Digite seu Nome"
                    />
                    <label>E-mail:</label>
                    <input
                        value={this.state.inputEmail}
                        onChange={this.onChangeInputEmail}
                        placeholder="Digite seu E-mail"
                    />

                    <button onClick={this.createUser}>Enviar</button>
                </section>

                <button onClick={this.props.onClickVerLista}>Trocar de Tela</button>
            </div>
        )
    }
}
export default Cadastro