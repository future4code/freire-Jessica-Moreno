import axios from "axios";
import React from "react";
import {useProtectedPage} from "../../hooks/useProtectedPage";

export const FeedPage = () => {
    useProtectedPage()

    const getPosts = () => {
        axios.get
    }
    return(
        <></>
    )
}