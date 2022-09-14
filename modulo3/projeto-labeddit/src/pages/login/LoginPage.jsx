import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from '../../hooks/useForm';
import logoLabeddit from '../../assets/img/logoLabeddit.svg';
import {goToCadastrePage, goToFeedPage} from '../../router/cordinator'
import { URL_BASE } from "../../constants/url";
import axios from "axios";

export const LoginPage = () => {
    const {form, onChange, clear} = useForm({email:"", password:""})
    const navigate = useNavigate()

    const login = () => {

        axios.post (`${URL_BASE}/users/login`, form)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(navigate)
            console.log("foi")
            
        })
        .catch((err)=>alert("erro"))
        
    }

    const onClickLogin = (e) => {
        e.preventDefault()
        login()
        
        
    }
    return(
        <>
            <img src={logoLabeddit} alt="Logotipo Labeddit"/>
            <p>O projeto de rede social Labenu</p>
            <form onSubmit={onClickLogin}>
                <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder={"E-mail"}
                    type="email"
                    required
                />
                <input
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    placeholder={"Senha"}
                    type="password"
                    required
                />
                <button>Continuar</button>
                <button onClick={()=> goToCadastrePage(navigate)}>Criar uma conta!</button>
            </form>
        </>
    )
}