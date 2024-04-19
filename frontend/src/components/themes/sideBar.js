import { createTheme } from '@mui/material/styles';

const sideBar = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        h3: {
            textAlign: 'center',
            marginBottom: '6rem',
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    borderRight: '2px solid #e7e7e7',
                    marginTop: '2rem',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    width: '100% !important',  // Asegura que los botones ocupen todo el ancho del sidebar
                    height:'7rem',
                    textTransform: 'none',
                    color: '#6d2e9b',
                    fontFamily: '"Verdana", serif',
                    fontSize:'2vh', 
                    border:'none !important',  // Esto debería ser suficiente para quitar el borde
                    '&:hover': {
                        backgroundColor: '#ead9fb',
                        border:'none',  // Asegúrate de que el borde también se quite al pasar el ratón
                    },
                },
            },
        },
    },
});

export default sideBar;
