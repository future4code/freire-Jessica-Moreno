import React from "react";
// import styled from 'styled-component'

// const CardsPublicC = styled.div`
// width: 300px
// `

const CardsPublic = (props) =>{
    const {name, description, planet, durationInDays, date} = props.trip
    return (
        <div>
            <p>Nome:{name}</p>
            <p>Descrição:{description}</p>
            <p>Planeta:{planet}</p>
            <p>durationInDays:{durationInDays}</p>
            <p>Data:{date}</p>
        </div>
    )
}

export default CardsPublic