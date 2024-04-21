import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import BookCard from '../../cards/BookCard';
import { getLocalStorageData } from '../../../helpers/localstorage/getData';
import { getCurrentlyBooks } from '../../../redux/actions/currentlyBooks/getCurrentlyBooks';
import { fillBookData } from '../../../redux/slices/currentlyBooks/editBookSlice';
import { stateReset } from '../../../redux/slices/currentlyBooks/editBookSlice'
import { resetStateAdd } from '../../../redux/slices/currentlyBooks/addBookSlices'
import { deleteCurrentlyBook } from '../../../redux/actions/currentlyBooks/deleteCurrentlyBooks';

import { ThemeProvider } from '@mui/material/styles';
import book from './../../themes/books';

export default function Currently() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = getLocalStorageData('USERID');

  const { error, success, books, loading } = useSelector((state) =>
    state.currently.get);

  const editBook = ((bookData) => {
    dispatch(fillBookData(bookData));
    navigate('/Home/Currently/EditForm');
  })

  const deleteBook = ((bookId) => {
    dispatch(deleteCurrentlyBook(bookId));
    setTimeout(() => {
      dispatch(getCurrentlyBooks(userId));
    }, 500);
  })

  useEffect(() => {
    dispatch(stateReset());
    dispatch(resetStateAdd());
    dispatch(getCurrentlyBooks(userId));
  }, []);

  return (
    <ThemeProvider theme={book}>
    <>
      <Grid container spacing={2}>
        <Grid xs={10}>
          <Typography variant="h2" mt={2} textAlign='center'
          color='black'>
            Actualmente estás leyendo...
          </Typography>
        </Grid>
        <Grid xs={2} mt={4}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              navigate('/Home/Currently/Form');
            }}
          >
            +
          </Button>
        </Grid>
      </Grid>

      {
        loading !== true ?
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
          : <></>
      }
    </>
    </ThemeProvider>
  );
}