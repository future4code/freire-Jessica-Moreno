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
        .then((res)=>{
            getAProfileToChoose()
        })
        .catch((err)=>{
            console.log(err.data.message)
        })
        
    }


    return(
        <main>
            <img src={profile.photo}/>
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
            <footer><button onClick={()=> choosePerson(false) }>(x)</button> <button onClick={()=>choosePerson()}>(s2)</button>
        </footer>
        </main>
        
        
    )

}

export default Cards;