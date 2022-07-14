import React from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../../../hooks/useRequestData";


function TripListPage () {
    const navigate = useNavigate()
    const listOfTrips = useRequestData

    return(
        <div>
            <h1>Lista</h1>
        </div>
    )
}

export default TripListPage