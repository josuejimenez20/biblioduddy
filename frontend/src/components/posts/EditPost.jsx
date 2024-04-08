import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Typography, Button } from '@mui/material';
import NewPostForm from './NewPostForm';
import { getPostById } from '../../redux/actions/posts/getPostById';
import {editMyPost} from '../../redux/actions/posts/editMyPost';
import { getLocalStorageData } from '../../helpers/localstorage/getData';

export default function EditPost() {

    const navigate = useNavigate();
    const params = useParams();

    const { postId } = params;

    const [data, setData] = useState(null);

    const getPostData = async () => {
        try {
            const result = await getPostById(postId);

            setData(result);
        } catch (error) {

        }
    }

    const handleNewPost = (async (data) => {
        const formData = {
            title: data.title.value,
            content: data.content.value,
            image_path: data.image_path.value,
        }

        const userId = getLocalStorageData('USERID');

        formData.post_id = postId;

        await editMyPost(formData);

        navigate('/Home/myposts')
    })


    useEffect(() => {
        getPostData();
    }, [])

    return (
        <>
            {
                data ?


                    <Grid container>
                        <Grid xs={11}>
                            <Typography variant='h3' textAlign='center' mb={5} mt={3}
                                color='#376DCC'>
                                EDITAR POST </Typography>
                        </Grid>
                        <Grid xs={1}>
                            <Button variant="text" onClick={() => {
                                navigate('/Home/myposts')
                            }}> <Typography variant='h5' mt={3}
                                textAlign='center'>
                                    X </Typography> </Button>
                        </Grid>
                        <Grid xs={12} marginLeft={2}>
                            <NewPostForm
                                nameButton='Editar'
                                title={data.title}
                                content={data.content}
                                handleSumbit={handleNewPost} />
                        </Grid>
                    </Grid>
                    : <></>
            }
        </>
    )
}
