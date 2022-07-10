import React, { useEffect, useState } from "react";
import axios from "axios";
import './Cards.css'



function Cards () {
    const [profile, setProfile] = useState ({})

    
    const getAProfileToChoose = async () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-moreno-freire/person"
        try{
            const res = await axios.get (url)
                setProfile(res.data.profile)
            console.log(res.data.profile)
        } catch(err){
            console.log(err.response.data)
        }
    
    }

    const clearMatchs = async () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-moreno-freire/clear"
    
        try {
            const res = await axios.put (url)
            getAProfileToChoose()
        } catch (err){
            alert("erro")
        }
    }

    useEffect(()=>{
        getAProfileToChoose();

    },[])

    const choosePerson = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-moreno-freire/choose-person"
        const body = {
            id:profile.id,
            choice:true
        }
        
        axios.post (url,body)
        .then(()=>{
            getAProfileToChoose()
        })
        .catch((err)=>{
            console.log(err.data.message)
        })
        
    }


    return(
        <main>
            <header> AstroMatch - <button>ver matchs</button></header>
            <img src={profile.photo} alt={profile.photo_alt}/>
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
            <footer>
                <button onClick={()=> getAProfileToChoose() }>(x)</button> <button onClick={()=>choosePerson()}>(s2)</button>
                <button onClick={() => clearMatchs()}>Apagar Matchs</button>
            </footer>
        </main>
        
        
    )

}

export default Cards;