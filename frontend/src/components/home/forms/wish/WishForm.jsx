import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import NewBookForm from '../NewBookForm';
import Grid from '@mui/material/Unstable_Grid2';
import { getLocalStorageData } from '../../../../helpers/localstorage/getData'
import { addWishBook } from '../../../../redux/actions/wishBooks/addWish';

export default function PendingForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { error, success, userData } =
        useSelector((state) => state.wish.add);

    useEffect(() => {
        if (success === true)
            navigate('/Home/WishList');
    }, [success])

    const handleNewBook = ((data) => {
        const formData = {
            name: data.name.value,
            author: data.author.value,
            gender: data.gender.value,
            publication_date: data.publication_date.value,
            editorial: data.editorial.value,
            image_path: data.image_path.value,
        }

        const userId = getLocalStorageData('USERID');

        formData.userId = userId;

        dispatch(addWishBook(formData));

    })

    return (
        <>
            <Grid container >
                <Grid xs={11}>
                    <Typography variant='h3' textAlign='center' mb={5} mt={3}>
                        NUEVO LIBRO LEYENDO ACTUALMENTE </Typography>
                </Grid>
                <Grid xs={1}>
                    <Button variant="text" onClick={() => {
                        navigate('/Home/WishList')
                    }}> <Typography variant='h5' mt={3}
                        textAlign='center'>
                            X </Typography> </Button>
                </Grid>
            </Grid>
            <NewBookForm handleSumbit={handleNewBook} />
        </>
    )
}
