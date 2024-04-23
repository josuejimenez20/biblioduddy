import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPostsAction } from '../../../redux/actions/posts/allPosts/getAllPosts';
import { getAllPostsKeyWord } from '../../../redux/actions/posts/allPosts/getAllPostsKeyWord';
import AllPostCard from './AllPostCard';

export default function AllPosts() {

    const navigate = useNavigate();

    const [posts, setPosts] = useState(null);
    const [errorPosts, setErrorPosts] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');


    const getAllPosts = async () => {
        try {
            const result = await getAllPostsAction();
            setPosts(result);
        } catch (error) {
            setErrorPosts(error);
        }
    }

    const handleSearch = async () => {
        try {
            const result = await getAllPostsKeyWord(searchQuery);
            setPosts(result);
        } catch (error) {
            setErrorPosts(error);
        }
    }

    const viewcontentPost = (postId) => {
        navigate(`/home/post/${postId}`);
    }

    useEffect(() => {
        getAllPosts();
    }, [])

    return (
        <>

            <div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search posts..."
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>

            {posts
                ? posts.map((element, index) => {
                    return <AllPostCard
                        key={index}
                        post_id={element.post_id}
                        name={element.title}
                        author={element.autor_name}
                        publication_date={element.publish_date.slice(0, 10)}
                        viewFunction={viewcontentPost}
                    />
                })
                :

                <h1>Posts ...</h1>

            }
        </>
    )
}
