import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import NewPostForm from './NewPostForm';
import Grid from '@mui/material/Unstable_Grid2';
import { getLocalStorageData } from '../../helpers/localstorage/getData';
import { newPost } from '../../redux/actions/posts/newPost';
import PostCard from '../cards/PostCard';

import { ThemeProvider } from '@mui/material/styles';
import form from '../themes/add';

export default function NePost() {

    const navigate = useNavigate();

    const handleNewPost = (async (data) => {
        const formData = {
            title: data.title.value,
            content: data.content.value,
            image_path: data.image_path.value,
        }

        const userId = getLocalStorageData('USERID');

        formData.user_id = userId;

        await newPost(formData);

        navigate('/Home/myposts')
    })

    return (
        <ThemeProvider theme={form}>
            <Typography variant='h3' textAlign='center' mb={5} mt={3}>
                        Nuevo post</Typography>
            <Grid container>
                <Grid xs={1} sx={{marginLeft:'95%'}}>
                    <Button variant="text" onClick={() => {
                        navigate('/Home/myposts')
                    }}> <Typography variant='h5'
                        textAlign='center'>x</Typography> </Button>
                </Grid>
                <Grid xs={12} marginLeft={2}>
                    <NewPostForm handleSumbit={handleNewPost} />
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}
