import React, { useEffect } from 'react';
import { Header, Footer } from '../components'
import { Landing } from "./landing";
import { Login } from './login'
import { Dashboard } from './dashboard'
import { Form } from './formPage'
import { Successful } from './successful';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';


export const Router = () => {


    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/lading' element={<Landing />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/form' element={<Form />} />
                    <Route path="login" element={<Login />} />
                    <Route path="/successful" element={<Successful />} />
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </div>
    );
};