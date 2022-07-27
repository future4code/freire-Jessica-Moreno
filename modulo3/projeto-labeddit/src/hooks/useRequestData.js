import axios from "axios";
import React, {useState, useEffect} from "react";
import { URL_BASE } from "../constants/url";

const useRequestData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)

    const getData = () => {
        axios
        .get(`${URL_BASE}${endpoint}`)
    }

}

export default useRequestData