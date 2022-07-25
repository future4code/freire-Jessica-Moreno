import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "../../../constants/Countries";
import { useForm } from "../../../hooks/useForm";
import { sendApplication } from "../../../service/request";
import useRequestData from "../../../hooks/useRequestData"
import { goBack } from "../../../routes/cordinator";

function ApplicationPage() {
    const navigate = useNavigate()
    const [tripId, setTripId] = useState("")
    const { form, onChange, clear } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const [listOfAllTrips] = useRequestData("/trips", {})

    const clearForm = () => {
        clear()
        setTripId("")
    }

    const onClickApply = (e) => {
        e.preventDefault()
        sendApplication(form, tripId, clearForm)

    }
    const onChangeTripId = (e) => {
        setTripId(e.target.value)
    }

    const tripOption = listOfAllTrips.trips && listOfAllTrips.trips.map((t) => {
        return <option value={t.id} key={t.id} >{t.name}</option>
    })

    return (
        <div>
            <h1>inscreva-se</h1>
            <form onSubmit={onClickApply}>
                <select defaultValue="" onChange={onChangeTripId}>
                    <option value="">Escolha uma viagem</option>
                    {tripOption}
                </select>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="nome"
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="idade"
                    value={form.age}
                    onChange={onChange}
                    required
                    min={18}
                />
                <textarea
                    name="applicationText"
                    id="applicationText"
                    placeholder="por que escolher voce?"
                    cols="30"
                    rows="10"
                    value={form.applicationText}
                    onChange={onChange}
                />
                <input
                    type="text"
                    id="profession"
                    name="profession"
                    placeholder="Profissão"
                    value={form.profession}
                    onChange={onChange}
                    required
                />
                <select
                    name="country"
                    id="country"
                    placeholder="País"
                    value={form.country}
                    onChange={onChange}>
                    <option value=""> Escolha um pais</option>
                    {countries.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
                </select>
                <button type={"submit"}>Enviar</button>
            </form>
            <button onClick={() => goBack(navigate) }>voltar</button>
        </div>
    )
}

export default ApplicationPage