import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Currently from '../../components/home/books/Currently';
import CurrentlyForm from '../../components/home/forms/currently/CurrentlyForm';
import CurrentlyFormEdit from '../../components/home/forms/currently/CurrentlyFormEdit';
import Pending from '../../components/home/books/Pending';
import PendingForm from '../../components/home/forms/pending/PendingForm'
import PendingFormEdit from '../../components/home/forms/pending/PendingFormEdit'
import ReadingHistory from '../../components/home/books/ReadingHistory';
import HistoryForm from '../../components/home/forms/history/HistoryForm'
import HistoryFormEdit from '../../components/home/forms/history/HistoryFormEdit'
import WishList from '../../components/home/books/WishList';
import WishListFrom from '../../components/home/forms/wish/WishForm';
import WishListEdit from '../../components/home/forms/wish/WishFormEdit';
import Welcome from '../../components/home/Welcome';
import MyPosts from '../../components/posts/MyPosts';
import NePost from '../../components/posts/NewPost';
import EditPost from '../../components/posts/EditPost';

export default function HomeRoutes() {
    return (

        <Routes>
            <Route path='*' element={<h1>NOT FOUND</h1>} />
            <Route path='/' element={<Welcome />} />
            <Route path='/Pending' element={<Pending />} />
            <Route path='/Pending/Form' element={<PendingForm />} />
            <Route path='/Pending/EditForm' element={<PendingFormEdit />} />
            <Route path='/History' element={<ReadingHistory />} />
            <Route path='/History/Form' element={<HistoryForm />} />
            <Route path='/History/EditForm' element={<HistoryFormEdit />} />
            <Route path='/WishList' element={<WishList />} />
            <Route path='/Wish/Form' element={<WishListFrom />} />
            <Route path='/Wish/EditForm' element={<WishListEdit />} />
            <Route path='/Currently' element={<Currently />} />
            <Route path='/Currently/Form' element={<CurrentlyForm />} />
            <Route path='/Currently/EditForm' element={<CurrentlyFormEdit />} />
            <Route path='/myposts' element={<MyPosts />} />
            <Route path='/newpost' element={<NePost />} />
            <Route path='/editpost/:postId' element={<EditPost />} />


        </Routes>

    )
}
