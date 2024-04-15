import React, { useEffect, useState } from 'react';
import {
    Typography, Divider,
    Stack
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../redux/actions/posts/getPostById';
import { TextoConSaltosDeLinea } from '../../helpers/text/newContent';

export default function ViewContentPost() {

    const { postId } = useParams();

    const [postData, setPostData] = useState(null);
    const [postTitle, setPostTitle] = useState(null);
    const [postError, setPostError] = useState(null);

    const getPostContent = async () => {

        try {
            const result = await getPostById(postId);
            setPostData(result);



        } catch (error) {
            setPostError("Error al obtener la informacion del post");
        }
    }

    useEffect(() => {
        getPostContent();
    }, [])

    useEffect(() => {
        if (postData) {
            const contentV2 = TextoConSaltosDeLinea(postData.content);
            setPostTitle(contentV2)
        }
    }, [postData])

    return (
        <>
            {
                postData ?
                    <>
                        <Typography variant='h2'>
                            {postData.title}
                        </Typography>
                        <Stack direction='row' spacing={10}>
                            <Typography variant='h5'>
                                {postData.autor_name}
                            </Typography>
                            <Typography variant='h5'>
                            {postData.publish_date.slice(0, 10)}
                            </Typography>
                        </Stack>

                        <Divider />

                        <Typography marginTop={4} variant='body1'>
                            {postTitle}
                        </Typography>
                    </>
                    : <></>

            }
        </>
    )
}
