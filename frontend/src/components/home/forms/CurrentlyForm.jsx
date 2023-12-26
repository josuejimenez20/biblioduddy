import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import NewBookForm from './NewBookForm';
import Grid from '@mui/material/Unstable_Grid2';


export default function CurrentlyForm() {

    const navigate = useNavigate();

    const handleNewBook = ((data) => {
        const formData = {
            name: data.name.value,
            author: data.author.value,
            gender: data.gender.value,
            publication_date: data.publication_date.value,
            editorial: data.editorial.value,
            image_path: data.image_path.value,
        }
        console.log(formData);

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
                        navigate('/Home/Currently')
                    }}> <Typography variant='h5' mt={3}
                        textAlign='center'>
                            X </Typography> </Button>
                </Grid>
            </Grid>
            <NewBookForm handleSumbit={handleNewBook} />
        </>
    )
}
