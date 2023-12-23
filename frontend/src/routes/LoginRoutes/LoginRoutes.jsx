import { Route, Routes } from 'react-router-dom';

import React from 'react'
import LoginUser from '../../components/login/LoginUser';

export default function LoginRoutes() {
    return (

        <Routes>
            <Route path='*' element={<h1>NOT FOUND</h1>} />
            <Route path='/' element={<LoginUser />} />


        </Routes>

    )
}
