import React from "react";
import { Header } from "../../components/Header";
import useForm from "../../hooks/useForm";
import { URL_BASE } from "../../constants/url";
import axios from "axios";

export const CadastrePage = () => {
    const {form, onChange, clear} = useForm({username:"", email:"", password:""})

    const singUp = () => {
        axios.post(`${URL_BASE}/users/signup`, form)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            clear()
            console.log("cadastro realizado com sucesso");
        })
        .catch((err)=>alert(err.data))
    }

    const onClickCadastro = (e) => {
        e.preventDefault()
        singUp()
        
    }
    console.log(form);
    return(
        <>
        <Header/>
        <h1>Olá, boas vindas ao labEddit ;)</h1>
        <form onSubmit={onClickCadastro}>
            <input
                name="username"
                value={form.username}
                onChange={onChange}
                placeholder="Nome de usuario"
                type='username'
                required
            />
            <input
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="E-mail"
                type='email'
                required
            />
            <input
                name="password"
                value={form.password}
                onChange={onChange}
                placeholder="Senha"
                type='password'
                required
            />
            <p>Ao continuar, você concorda com o nosso e nossa Contrato deusuário Política de Privacidade</p>
            <p><input
                name="checkbox"
                value={true}
                onChange={onChange}
                type='checkbox'
             />
             Eu concordo em receber emails sobre coisas legaisno Labeddit
             </p>

             <button>Cadastrar</button>
        </form>
        </>
    )
}