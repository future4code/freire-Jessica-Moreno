import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { goToLoginPage } from "../router/cordinator";

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect (()=>{
        const token = localStorage.getItem("token")
        if (!token){
            goToLoginPage(navigate)
        }
    },[navigate])
}

