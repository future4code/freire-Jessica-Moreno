import React from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../../../hooks/useProtectedPage";
import { goBack } from "../../../../routes/cordinator";
function CreateTripPage () {
    useProtectedPage()
    const navigate = useNavigate
    return (
        <div>
            <button onClick={()=> goBack(navigate) }>voltar</button>
        </div>
    )
}

export default CreateTripPage