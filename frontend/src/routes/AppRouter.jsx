import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../components/login/Login';
import Home from '../components/home/Home';


export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='*' element={<h1>Not Found</h1>} />
                <Route path='/' element={<Login />} />
                <Route path='/login/*' element={<Login />} />
                <Route path='/Home/*' element={<Home />} />
            </Routes>
        </>
    )
}
