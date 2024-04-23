import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPostsAction } from "../../../redux/actions/posts/allPosts/getAllPosts";
import { getAllPostsKeyWord } from "../../../redux/actions/posts/allPosts/getAllPostsKeyWord";
import AllPostCard from "./AllPostCard";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

export default function AllPosts() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState(null);
  const [errorPosts, setErrorPosts] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const getAllPosts = async () => {
    try {
      const result = await getAllPostsAction();
      setPosts(result);
    } catch (error) {
      setErrorPosts(error);
    }
  };

  const handleSearch = async () => {
    try {
      const result = await getAllPostsKeyWord(searchQuery);
      setPosts(result);
    } catch (error) {
      setErrorPosts(error);
    }
  };

  const viewcontentPost = (postId) => {
    navigate(`/home/post/${postId}`);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>

      <Paper
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        component="form"
        sx={{ marginTop:'3rem', p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar Post"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton onClick={handleSearch} color="primary" sx={{ p: "10px" }} aria-label="directions">
            <span>&#128269;</span>
        </IconButton>
      </Paper>

      {posts ? (
        posts.map((element, index) => {
          return (
            <AllPostCard
              key={index}
              post_id={element.post_id}
              name={element.title}
              author={element.autor_name}
              publication_date={element.publish_date.slice(0, 10)}
              viewFunction={viewcontentPost}
            />
          );
        })
      ) : (
        <h1>Posts ...</h1>
      )}
    </>
  );
}
