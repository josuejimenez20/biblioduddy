import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import PostCard from '../cards/PostCard';
import { getLocalStorageData } from '../../helpers/localstorage/getData';
import { getAllPostsByUserId } from '../../redux/actions/posts/getMyPosts';
import { deletMyPost } from '../../redux/actions/posts/deleteMyPost';
import { ThemeProvider } from '@mui/material/styles';
import book from './../themes/books';

export default function MyPosts() {

    const navigate = useNavigate();

    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);


    const getMyPosts = async () => {
        try {

            const userId = getLocalStorageData('USERID');
            const result = await getAllPostsByUserId(userId)
            setPosts(result.posts)

        } catch (error) {
            setError('Error al obtener mis posts')
        }
    }

    const editFunction = (postId) => {
        navigate(`/Home/editpost/${postId}`)
    }

    const deletePost = async (postId) => {
        try {
            await deletMyPost(postId);
            const userId = getLocalStorageData('USERID');
            const result = await getAllPostsByUserId(userId);
            setPosts(result.posts)
        } catch (error) {
            setError('Error al borrar post')
        }
    }

    useEffect(() => {
        getMyPosts();
    }, [])

    return (
        <ThemeProvider theme={book}>
        <>

            <Button variant='contained'
                onClick={() => {
                    navigate('/Home/newpost')
                }}>
                +
            </Button>

            {posts ?
                posts.map((element, index) => {
                    return <PostCard
                        key={index}
                        post_id={element.post_id}
                        name={element.title}
                        publication_date={element.publish_date.slice(0, 10)}
                        author={element.autor_name}
                        deleteFunction={deletePost}
                        editFunction={editFunction}
                    />
                })

                : <></>}



        </>
        </ThemeProvider>
    )
}
