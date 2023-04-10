import React, { useEffect } from 'react';
import { Header, Footer } from '../components'
import { Lading } from "./lading";
import { Login } from './login'
import { Dashboard } from './dashboard'
import { Form } from './formPage'
import { setToken } from '../redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const Router = () => {
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            dispatch(setToken(token))
        }
    })
    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Lading />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/form' element={<Form />} />
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </div>
    );
};