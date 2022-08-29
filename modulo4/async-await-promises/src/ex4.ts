import axios from "axios";
import { baseURL } from "./baseURL";

// void, pois ele não retorna nada

async function creatNews(
    title: string,
    context: string,
    date: number
): Promise<void> {
    await axios.put(`${baseURL}/news`, {
        title: title,
        context: context,
        date: date
    })    
}



