import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import BookCard from '../../cards/BookCard';
import { getLocalStorageData } from '../../../helpers/localstorage/getData';
import { getWishBooks } from '../../../redux/actions/wishBooks/getWishBooks';
import { fillBookData } from '../../../redux/slices/currentlyBooks/editBookSlice';
import { stateReset } from '../../../redux/slices/wishBooks/editBookSlice'
import { stateResetAdd } from '../../../redux/slices/wishBooks/addBookSlice'
import { deleteWishBook } from '../../../redux/actions/wishBooks/deleteWishBook';

import { ThemeProvider } from '@mui/material/styles';
import book from './../../themes/books';

export default function WishList() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = getLocalStorageData('USERID');

  const { error, success, books } = useSelector((state) =>
    state.wish.get);

  const editBook = ((bookData) => {
    dispatch(fillBookData(bookData));
    navigate('/Home/Wish/EditForm');
  })

  const deleteBook = ((bookId) => {
    dispatch(deleteWishBook(bookId));
    setTimeout(() => {
      dispatch(getWishBooks(userId));
    }, 500);
  })

  useEffect(() => {
    dispatch(stateReset());
    dispatch(stateResetAdd());
    dispatch(getWishBooks(userId));
  }, []);

  return (
    <ThemeProvider theme={book}>
    <>
      <Grid container spacing={2}>
        <Grid xs={10}>
          <Typography variant="h2" mt={2} textAlign='center'
            color='black'>
            Libros deseados
          </Typography>
        </Grid>
        <Grid xs={2} mt={4}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              navigate('/Home/Wish/Form');
            }}
          >
            +
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {success === true ? (
          books.map((element, index) => (
            <Grid xs={4} mt={4} key={index}>
              <BookCard
                editFunction={editBook}
                deleteFunction={deleteBook}
                name={element.name}
                author={element.author}
                editorial={element.editorial}
                gender={element.gender}
                publication_date={element.publication_date.substring(0, 10)}
                image_path={element.image_path}
                bookId={element.book_id}
              ></BookCard>
            </Grid>
          ))
        ) : (
          <></>
        )}
      </Grid>
    </>
    </ThemeProvider>
  );
}