import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Currently from '../../components/home/books/Currently';
import CurrentlyForm from '../../components/home/forms/CurrentlyForm';
import Pending from '../../components/home/books/Pending';
import ReadingHistory from '../../components/home/books/ReadingHistory';
import WishList from '../../components/home/books/WishList';
import Welcome from '../../components/home/Welcome';

export default function HomeRoutes() {
    return (

        <Routes>
            <Route path='*' element={<h1>NOT FOUND</h1>} />
            <Route path='/' element={<Welcome />} />
            <Route path='/Currently' element={<Currently />} />
            <Route path='/Pending' element={<Pending />} />
            <Route path='/History' element={<ReadingHistory />} />
            <Route path='/WishList' element={<WishList />} />
            <Route path='/Currently/Form' element={<CurrentlyForm />} />


        </Routes>

    )
}
