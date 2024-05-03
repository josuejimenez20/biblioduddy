import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { findBooksByName } from '../../redux/actions/findBooks/findBookByName';
import CardBook from './cardBook';

export default function FindBook() {


    const [books, setBooks] = useState(null);
    const [errorBooks, setErrorBooks] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");


    const handleSearch = async () => {
        console.log(searchQuery);
        try {
            const result = await findBooksByName(searchQuery);
            // setBooks(result);
        } catch (error) {
            setErrorBooks(errorBooks);
        }
    };

    return (
        <>
            <Paper
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                component="form"
                sx={{
                    marginTop: '3rem', p: "2px 4px", display: "flex", alignItems: "center", width: 400,
                    marginBottom: '3em'
                }}
            >
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Buscar Post"
                    inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton onClick={handleSearch} color="primary" sx={{ p: "10px" }} aria-label="directions">
                    <span>&#128269;</span>
                </IconButton>
            </Paper>
            <CardBook
                title='Habitos Atomicos'
                author='Pablo Axel'
                description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ipsum repellat delectus sunt consequatur consectetur aliquid quam ducimus ullam enim quae doloribus sapiente, doloremque nemo eligendi aliquam a magnam eum!'
                buyLink='https://gemini.google.com/app/2599b7f66ea6fc1d'
                imagePath='http://books.google.com/books/content?id=j7O9EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api' />
        </>
    )
}

