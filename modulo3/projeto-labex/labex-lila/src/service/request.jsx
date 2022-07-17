import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAdmHomePage } from '../routes/cordinator'

export const fazerLogin = (body, navigate) =>{
    axios
    .post(`${BASE_URL}/login`, body)
    .then((res) =>{
        localStorage.setItem("token", res.data.token)
        goToAdmHomePage(navigate)
    })
    .catch((err)=> alert(err.response.data.message))

    
}

export const sendApplication = (body, tripId, clear ) => {
    
    axios
    .post(`${BASE_URL}/trips/${tripId}/apply`, body)
    .then(()=>{
        alert('Aplicação feita com sucesso! boa sorte!')
        clear()

    })
    .catch((err)=> alert("erro"))
}