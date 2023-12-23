import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import AppRouter from './routes/AppRouter';
import MenuBar from './components/login/menuBar/MenuBar';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <MenuBar />
        <Container maxWidth='xl' sx={{ bgcolor: 'red' }}>
          <Grid container spacing={2}>
            <Grid xs={2}>
              <h2>Barra</h2>
            </Grid>
            <Grid xs={9}>
              <AppRouter />
            </Grid>
          </Grid>
        </Container>
      </Provider>
    </>
  )
}

export default App;