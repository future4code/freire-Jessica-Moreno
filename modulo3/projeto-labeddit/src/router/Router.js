import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { CadastrePage } from "../pages/CadastrePage";
import { FeedPage } from "../pages/FeedPage";
import { PostPage } from "../pages/PostPage";
import { ErrorPage } from "../pages/ErrorPage";

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>}/>
                <Route path={"/cadastre"} element={<CadastrePage/>}/>
                <Route path={"/feed"} element={<FeedPage/>}/>
                <Route path={"/post/:id"} element={<PostPage/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
