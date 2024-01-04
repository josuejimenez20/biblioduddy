import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/login/Login';
import Home from '../components/home/Home';
import { getLocalStorageData } from '../helpers/localstorage/getData';


export default function AppRouter() {

    const navigate = useNavigate();

    const [userId, setUserId] = useState();

    useEffect(() => {
        const localStorageUserId = getLocalStorageData('USERID');
        setUserId(localStorageUserId);
    }, [])


    useEffect(() => {
        if (userId !== null) {
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [userId])

    return (
        <>
            <Routes>
                <Route path='*' element={<h1>Not Found</h1>} />
                <Route path='/' element={<Home />} />
                <Route path='/login/*' element={<Login />} />
                <Route path='/Home/*' element={<Home />} />
            </Routes>
        </>
    )
}
