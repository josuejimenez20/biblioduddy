import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import AppRouter from './routes/AppRouter';
import MenuBar from './components/menuBar/MenuBar';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import SideBar from './components/sidebar/SideBar';
import { getLocalStorageData } from './helpers/localstorage/getData';

function App() {

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userId = getLocalStorageData('USERID');

    if (userId) setUserId(userId);
  }, [])

  return (
    <>
      <Provider store={store}>
        {
          userId ?
            <MenuBar />
            : <></>
        }
        <Container maxWidth='xxxl' background='#000'>
          <Grid container spacing={2}>
            {
              userId ?
                <Grid xs={2}>
                  <SideBar />
                </Grid>
                : <></>
            }
            <Grid xs={10}>
              <AppRouter />
            </Grid>
          </Grid>
        </Container>
      </Provider >
    </>
  )
}

export default App;