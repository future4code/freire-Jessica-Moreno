import React from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { fazerLogin } from "../../service/request";
import { useProtectedPage } from "../../hooks/useProtectedPage";


function LoginPage() {
    useProtectedPage()
    const { form, onChange } = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    const onClickLogin = (e) =>{
        e.preventDefalt()
        fazerLogin(form, navigate)
        
    }
    return (
        <div>
            <h1>login</h1>
            <form onSubmit={onClickLogin}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder={"Senha"}
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <button type={"submit"}>Entrar</button>
            </form>

        </div>
    )
}

export default LoginPage