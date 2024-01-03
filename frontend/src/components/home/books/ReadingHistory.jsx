import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import BookCard from '../../cards/BookCard';
import { getLocalStorageData } from '../../../helpers/localstorage/getData';
import { getHistoryBooks } from '../../../redux/actions/historyBooks/getHistoryBooks';
import { fillBookData } from '../../../redux/slices/historyBooks/editBookSlice';
import { stateReset } from '../../../redux/slices/historyBooks/editBookSlice'

export default function ReadingHistory() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = getLocalStorageData('USERID');

  const { error, success, books } = useSelector((state) =>
    state.history.get);

  const editBook = ((bookData) => {
    dispatch(fillBookData(bookData));
    navigate('/Home/History/EditForm');
  })

  const deleteBook = ((bookId) => {
    console.log(bookId);
  })

  useEffect(() => {
    dispatch(stateReset());
    dispatch(getHistoryBooks(userId));
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={10}>
          <Typography variant="h2" mt={2} textAlign='center'>
            Libros Actualmente Leyendo
          </Typography>
        </Grid>
        <Grid xs={2} mt={4}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              navigate('/Home/History/Form');
            }}
          >
            Agregar
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {success === true ? (
          books.map((element, index) => (
            <Grid xs={4} mt={4} key={index}>
              <BookCard
                editFunction={editBook}
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
  );
}