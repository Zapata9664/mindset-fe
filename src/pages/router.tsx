import React from 'react';
import { Lading } from "./lading";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Dashboard } from './dashboard'
import { Login } from './Login'
import { Header } from '../components/header.component'
import { Footer } from '../components/footer.component';

export const Router = () => {
    return (
        <div>
            <BrowserRouter>
            <Header></Header>
                <Routes>
                    <Route path='/' element={<Lading />} />
                    <Route path='/login' element={ <Login/> } />
                    <Route path='/dashboard' element={ <Dashboard/>}/>
                </Routes>
            </BrowserRouter>
            <Footer></Footer>

        </div>
    );
};