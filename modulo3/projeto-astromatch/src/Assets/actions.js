import axios from "axios";


export const getAProfileToChoose = async () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-moreno-freire/person"
    try{
        const res = await axios.get (url)
    } catch(err){
        alert("erro")
    }

}