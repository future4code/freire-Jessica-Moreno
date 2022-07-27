import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from '../../hooks/useForm';
import logoLabeddit from '../../assets/img/logoLabeddit.svg';
import {goToCadastrePage} from '../../router/cordinator'

export const LoginPage = () => {
    const {form, onChange, clear} = useForm({email:"", password:""})
    const navigate = useNavigate()

    const onClickLogin = (e) => {
        e.preventDefault()
        // fazerLogin(form, navigate, clear)
        console.log("foi")
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