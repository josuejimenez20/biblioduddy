import { Button, Container, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import menuBar from './../themes/menuBar';
import { removeLocalStorageData } from '../../helpers/localstorage/removeData';
import logo from '../../media/BiblioBuddy_Logo.png';


export default function MenuBar() {
    const navigate = useNavigate();

    const signOut = () => {
        removeLocalStorageData('USERID');
        window.location.reload();
        setTimeout(() => {
            navigate('/Login');
        }, 1000);
    }

    return (
        <ThemeProvider theme={menuBar}>
            <Container maxWidth='xxxl'>
            <img src={logo} alt="Home" style={{ width: '70px', height: '70px' }} onClick={() => {
                            navigate('/Home')
                        }}/>
                <div>
                    <Button id='getBooks' onClick={() => navigate('/Books')}>Consigue tus libros</Button>
                    <Button onClick={signOut}>Cerrar Sesión</Button>
                </div>
            </Container>
        </ThemeProvider>
    );
}
