import React from "react";
import { useNavigate, useParams} from "react-router-dom";
import { useProtectedPage } from "../../../../hooks/useProtectedPage";
import useRequestData from "../../../../hooks/useRequestData";
import { goBack } from "../../../../routes/cordinator";

function DetailsTripPage () {
    useProtectedPage()
    const navigate = useNavigate()
    const {id} = useParams()
    const [tripDetails, getTripDetails] = useRequestData(`/trip/${id}`)
    return(
        <div>
            <button onClick={()=> goBack(navigate)}>Voltar</button>
            {tripDetails && tripDetails.trip && <h2>{tripDetails.trip.name}</h2>}
        </div>
    )
}

export default DetailsTripPage