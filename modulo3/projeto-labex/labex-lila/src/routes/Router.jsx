import React from 'react';
import HomePage from '../pages/HomePage';
import TripListPage from '../pages/trips/list/TripListPage';
import ApplicationPage from '../pages/trips/application/ApplicationPage';
import LoginPage from '../pages/login/LoginPage';
import AdmHomePage from '../pages/admin/trips/list/AdmHomePage';
import DetailsTripPage from '../pages/admin/trips/details/DetailsTripPage';
import CreateTripPage from '../pages/admin/trips/create/CreateTripPage';
import ErrorPage from '../pages/ErrorPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


export const Router = ()=> {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<HomePage/>}/>
                <Route path='trip-list' element={<TripListPage/>}/>
                <Route path='application' element={<ApplicationPage/>}/>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='adm-home-page' element={<AdmHomePage/>}/>
                <Route path='details-trip/:id' element={<DetailsTripPage/>}/>
                <Route path='create-trip' element={<CreateTripPage/>}/>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}
