import axios from "axios";
import { baseURL } from "./baseURL";

//Esse método recebe um array de Promises e retorna outra
//Promise, que resolve em um array de respostas

// não precisa esperar uma requisição ser respondida para pedir outra

type user = {
	id: string;
	name: string;
	email: string;
}

const sendNotifications =async (
    users: user[],
    message: string
): Promise<void> => {
    try {
        const promises = users.map(user =>{
            return axios.post(`${baseURL}/notifications`,{
                subscriberId: user.id,
                message:message
            })
        })
        await Promise.all(promises)
    }catch{
        console.log("erro");
        
    }
}