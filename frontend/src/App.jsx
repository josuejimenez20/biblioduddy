import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import AppRouter from './routes/AppRouter';
import MenuBar from './components/menuBar/MenuBar';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import SideBar from './components/sidebar/SideBar';

function App() {

  return (
    <>
      <Provider store={store}>
        <MenuBar />
        <Container maxWidth='xl' sx={{ bgcolor: '#11151C' }}>
          <Grid container spacing={2}>
            <Grid xs={2}>             
                <SideBar />
            </Grid>
            <Grid xs={10}>
              <AppRouter />
            </Grid>
          </Grid>
        </Container>
      </Provider>
    </>
  )
}

export default App;