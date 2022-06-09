import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`



class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: "Florzinha",
        fotoUsuario: 'https://picsum.photos/50/50?random=1',
        fotoPost: 'https://picsum.photos/200/150?random=1'
      },
      {
        nomeUsuario: 'Docinho',
        fotoUsuario: 'https://picsum.photos/50/50?random=2',
        fotoPost: 'https://picsum.photos/200/150?random=2'
      },
      {
        nomeUsuario: 'Lindinha',
        fotoUsuario: 'https://picsum.photos/50/50?random=3',
        fotoPost: 'https://picsum.photos/200/150?random=3'
      }
    ]
  }

  adicionarPost = () =>{

    const novoPost = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost
    }

    const copiaListaPost = [... this.state.posts, novoPost]
    this.setState({posts: copiaListaPost})

  }
  onChangeInputNomeUsuario =(nome)=>{
    this.setState({nomeUsuario: nome.target.value})
  }
  onChangeInputFotoUsuario =(foto)=>{
    this.setState({fotoUsuario: foto.target.value})
  }
  onChangeInputFotoPost =(post)=>{
    this.setState({fotoPost: post.target.value})
  }



  render() {

    let listaDePosts = this.state.posts.map((post) => {
      return (

        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />


      )

    })
    return (
      <MainContainer>
        {listaDePosts}
        <div>
          <input
            placeholder={'Nome do Usuario'}
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
          />
          <input
            placeholder={'Foto do Usuario'}
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
          />
          <input
            placeholder={'Foto do Post'}
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
          />
          <button onClick={this.adicionarPost}>Adicionar</button>
        </div>


      </MainContainer>


    );

  }
}

export default App;
