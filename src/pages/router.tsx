import React, { useEffect } from 'react';
import { Header, Footer } from '../components'
import { Lading } from "./lading";
import { Login } from './login'
import { Dashboard } from './dashboard'
import { Form } from './formPage'
import { Successful } from './successful';
import { RootState, setToken } from '../redux';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const Router = () => {


    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Lading />} />
                    <Route path='/lading' element={<Lading />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/form' element={<Form />} />
                    <Route path="login" element={ <Login />} />
                    <Route path="/successful" element={ <Successful />} />
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </div>
    );
};