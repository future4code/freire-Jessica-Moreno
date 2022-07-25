import React, { useEffect, useState } from "react";
import axios from "axios";


function Matchs () {

    const[listaMatches, setListaMatches] = useState([])

    const getMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-moreno-freire/person"
        
        axios.get (url)
            .then(res=>{                 
                setListaMatches(res.data.matches)
                console.log(res.data.matches)
    })
            .catch((err)=>{
                alert("erro")
    })
        
}           

    useEffect (()=>{
        getMatches()
    },[])

    return (
        <main>
            <header><button>dar Matchs</button>AstroMatch</header>
            {/* {listaMatches.map = ((match) =>{
        return (
            <p>
                <img src={match.photo} alt={match.photo_alt}/> 
                {match.name}
            </p>
        )})} */}


        </main>
    )
}

export default Matchs