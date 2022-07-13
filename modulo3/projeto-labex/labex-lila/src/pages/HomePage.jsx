import React from "react";
import { useNavigate } from "react-router-dom";
import {goToTripListPage, goToLoginPage } from '../routes/cordinator'





function HomePage () {
    const navigate = useNavigate()
    
    return(
        <div>
            <h1>labex</h1>
            <button onClick={()=>goToTripListPage(navigate)}>Lista de viagens</button>
            <button onClick={()=>goToLoginPage(navigate)}>login</button>
        </div>
    )
}

export default HomePage