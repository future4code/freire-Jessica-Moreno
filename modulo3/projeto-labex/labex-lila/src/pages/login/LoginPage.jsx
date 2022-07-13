import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage () {
    
    const navigate = useNavigate()
    return (
        <div>
            <h1>login</h1>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={""}
                onChange=""
                required
            />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                value={""}
                onChange=""
                required
            />
            <button>Entrar</button>

        </div>
    )
}

export default LoginPage