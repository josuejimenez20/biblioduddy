import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import BookCard from '../../cards/BookCard';
import { getLocalStorageData } from '../../../helpers/localstorage/getData';
import { getPendingBooks } from '../../../redux/actions/pendingBooks/getPendingBooks';
import { fillBookData } from '../../../redux/slices/currentlyBooks/editBookSlice';
import { stateReset } from '../../../redux/slices/pendingBooks/editBookSlice'
import { resetStateAdd } from '../../../redux/slices/pendingBooks/addBookSlice'
import { deletePendingBook } from '../../../redux/actions/pendingBooks/deletePending';

import { ThemeProvider } from '@mui/material/styles';
import book from './../../themes/books';

export default function Pending() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = getLocalStorageData('USERID');

  const { error, success, books } = useSelector((state) =>
    state.pending.get);

  const editBook = ((bookData) => {
    dispatch(fillBookData(bookData));
    navigate('/Home/Pending/EditForm');
  })

  const deleteBook = ((bookId) => {
    dispatch(deletePendingBook(bookId));
    setTimeout(() => {
      dispatch(getPendingBooks(userId));
    }, 500);
  })

  useEffect(() => {
    dispatch(stateReset());
    dispatch(resetStateAdd());
    dispatch(getPendingBooks(userId));
  }, []);

  return (
    <ThemeProvider theme={book}>
    <>
      <Grid container spacing={2}>
        <Grid xs={10}>
          <Typography variant="h2" mt={2} textAlign='center'
            color='black'>
            Libros pendientes
          </Typography>
        </Grid>
        <Grid xs={2} mt={4}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              navigate('/Home/Pending/Form');
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