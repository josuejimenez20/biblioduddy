import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import NewBookForm from '../NewBookForm';
import Grid from '@mui/material/Unstable_Grid2';
import { editCurrentlyBook } from '../../../../redux/actions/currentlyBooks/editCurrentlyBook';

export default function CurrentlyFormEdit() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { error, success, bookData } =
        useSelector((state) => state.currently.edit);

    const { name, author,
        gender, publication_date,
        editorial, image_path, bookId } = bookData;

    useEffect(() => {
        if (success === true)
            navigate('/Home/Currently');
    }, [success])

    const handleNewBook = ((data) => {
        const formData = {
            name: data.name.value,
            author: data.author.value,
            gender: data.gender.value,
            publication_date: data.publication_date.value,
            editorial: data.editorial.value,
            image_path: data.image_path.value,
            bookId: bookId
        }

        dispatch(editCurrentlyBook(formData));
    })

    return (
        <>
            <Grid container >
                <Grid xs={11}>
                    <Typography variant='h3' textAlign='center' mb={5} mt={3}>
                        EDITAR LIBRO {name}</Typography>
                </Grid>
                <Grid xs={1}>
                    <Button variant="text" onClick={() => {
                        navigate('/Home/Currently')
                    }}> <Typography variant='h5' mt={3}
                        textAlign='center'>
                            X </Typography> </Button>
                </Grid>
            </Grid>
            <NewBookForm
                handleSumbit={handleNewBook}
                name={name}
                author={author}
                editorial={editorial}
                gender={gender}
                image_path={image_path}
                nameButton="Editar"
                publication_date={publication_date}
            />
        </>
    )
}
