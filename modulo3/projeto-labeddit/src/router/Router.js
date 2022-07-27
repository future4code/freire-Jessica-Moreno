import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";
import { CadastrePage } from "../pages/cadastre/CadastrePage";
import { FeedPage } from "../pages/feed/FeedPage";
import { PostPage } from "../pages/post/PostPage";
import { ErrorPage } from "../pages/ErrorPage";

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>}/>
                <Route path="/cadastre" element={<CadastrePage/>}/>
                <Route path="/feed" element={<FeedPage/>}/>
                <Route path="/post/:id" element={<PostPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
