import React from "react";
import { useNavigate } from "react-router-dom";

function ApplicationPage () {
    const navigate = useNavigate()
    return (
        <div>
            <select name="" id="">
                
            </select>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="nome"
                value={""}
                onChange=""
                required
            />
            <input
                type="number"
                id="age"
                name="age"
                placeholder="idade"
                value={""}
                onChange=""
                required
                min={18}
            />
            <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={""}
                onChange=""
                required
            />
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
            />
            <input
                type="text"
                id="profision"
                name="profission"
                placeholder="Profissão"
                value={""}
                onChange=""
                required
            />
            <select name="" id=""></select>
        </div>
    )
}

export default ApplicationPage