import React from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../../../../hooks/useRequestData";
import CardsPrivate from "../../../../components/CardsPrivate"
import { useProtectedPage } from "../../../../hooks/useProtectedPage";
import { goBack } from "../../../../routes/cordinator";

function AdmHomePage () {
    useProtectedPage()
    const navegate = useNavigate()
    const [tripsData, getTrip] = useRequestData('/trips',{})

    const listOfTrips = tripsData.trips && tripsData.trips.map((t)=>{
        return <CardsPrivate key={t.id} trip={t} getTrip={getTrip}/>
    })
    return(
        <div>
            <button onClick={()=> goBack(navegate)}>voltar</button>
            <h1>Lista de viagens</h1>
            {listOfTrips && listOfTrips.length > 0 ? listOfTrips: <p>carregando...</p>}
        </div>
    )
}

export default AdmHomePage