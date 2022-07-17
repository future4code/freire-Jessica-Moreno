import React from "react";
import { useNavigate } from "react-router-dom";
import CardsPublic from "../../../components/CardsPublic";
import useRequestData from "../../../hooks/useRequestData";
import { goToApplicationPage } from "../../../routes/cordinator";


function TripListPage () {
    const navigate = useNavigate()
    const [tripsData] = useRequestData("/trips", {})
    
    const listOfTrips = tripsData.trips && tripsData.trips.map((t)=>{
        return <CardsPublic key = {t.id} trip={t}/>
    })

    return(
        <div>
            <button onClick={()=> goToApplicationPage(navigate)}>inscreva-se</button>
            <h1>Lista</h1>
            {listOfTrips && listOfTrips.length > 0 ? listOfTrips: <p>carregando...</p>}
        </div>
    )
}

export default TripListPage