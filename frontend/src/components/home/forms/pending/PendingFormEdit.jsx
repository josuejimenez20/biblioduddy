import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import NewBookForm from '../NewBookForm';
import Grid from '@mui/material/Unstable_Grid2';
import { editPendingBook } from '../../../../redux/actions/pendingBooks/editPendingBook';

export default function PendingFormEdit() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { error, success, bookData } =
        useSelector((state) => state.wish.edit);

    const { name, author,
        gender, publication_date,
        editorial, image_path, bookId } = bookData;

    useEffect(() => {
        if (success === true)
            navigate('/Home/Wish');
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

        dispatch(editPendingBook(formData));
    })

    return (
        <>
            <Grid container >
                <Grid xs={11}>
                    <Typography variant='h3' textAlign='center' mb={5} mt={3}
                        color='#376DCC'>
                        EDITAR LIBRO {name}</Typography>
                </Grid>
                <Grid xs={1}>
                    <Button variant="text" onClick={() => {
                        navigate('/Home/Wish')
                    }}> <Typography variant='h5' mt={3}
                        textAlign='center'>
                            X </Typography> </Button>
                </Grid>
            </Grid>
            <Grid xs={12} marginLeft={2}>
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
            </Grid>
        </>
    )
}
