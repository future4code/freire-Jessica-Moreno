import React from "react";
import { deleteATrip } from "../service/request";
import { goToDetailsTripPage } from "../routes/cordinator";
import { useNavigate } from "react-router-dom";
// import styled from 'styled-component'

// const CardsPrivateC = styled.div`
// width: 300px
// `

const CardsPrivate = (props) =>{
    const {id, name, getTrip} = props.trip
    const navigate = useNavigate()

    const onClickDeletTrip = (e) =>{
        e.stopPropagation()
        if(window.confirm(`Tem certeza que deseja deletar ${name}?`)){
            deleteATrip(id, getTrip)
        }
    }
    return (
        <div>
            <p>{name}</p>
            <button onClick={()=> goToDetailsTripPage(navigate, id) }>ver detalhes</button>
            <button onClick={onClickDeletTrip}>deletar</button>
        </div>
    )
}

export default CardsPrivate