import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import NewBookForm from '../NewBookForm';
import Grid from '@mui/material/Unstable_Grid2';
import { getLocalStorageData } from '../../../../helpers/localstorage/getData'
import { addPendingBook } from '../../../../redux/actions/pendingBooks/addPending';

import { ThemeProvider } from '@mui/material/styles';
import form from '../../../themes/add'

export default function PendingForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { error, success, userData } =
        useSelector((state) => state.pending.add);

    useEffect(() => {
        if (success === true)
            navigate('/Home/Pending');
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

        dispatch(addPendingBook(formData));

    })

    return (
        <ThemeProvider theme={form}>
            <Typography variant='h3' textAlign='center' mb={5} mt={3}>
                        Agregar un libro pendiente </Typography>
            <Grid container >
                <Grid xs={1} sx={{marginLeft:'95%'}}>
                    <Button variant="text" onClick={() => {
                        navigate('/Home/Pending')
                    }}> <Typography variant='h5'
                        textAlign='center'>x</Typography> </Button>
                </Grid>
            </Grid>
            <Grid xs={12} marginLeft={2}>
                <NewBookForm handleSumbit={handleNewBook} />
            </Grid>
        </ThemeProvider>
    )
}
