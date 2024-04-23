import { createTheme } from '@mui/material/styles';

const posts_theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        h5: {
            textAlign: 'center',
        },
        body2: {
            marginTop: '1rem',
            fontSize: '1.1rem',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: '0rem 2rem',
                    //width: '100% !important',  
                    height:'4rem',
                    textTransform: 'none',
                    color: '#6d2e9b',
                    fontFamily: '"Verdana", serif',
                    fontSize:'2vh', 
                    border:'none !important',  
                    '&:hover': {
                        backgroundColor: '#ead9fb',
                        border:'none', 
                    },
                },
                contained: { 
                    width: '5rem',
                    height: '5rem',
                    position: 'fixed',
                    fontSize:'5vh',
                    bottom: '2rem', 
                    right: '5rem',
                    borderRadius:'100%',
                    backgroundColor: '#04AA6D',
                    '&:hover': {
                        backgroundColor: '#09Af72', 
                    },
                },
            },
        },
        MuiContainer:{
            styleOverrides: {
                root: {
                    backgroundColor: '#ead9fb',
                    width: '100%',
                },
            },
        },
        MuiCard:{
            styleOverrides: {
                root: {
                    alignItems: 'center',
                    backgroundColor: '#e7e7e7',
                    border: 'none !important',
                    margin: '4rem 0px',
                    padding: '2rem',
                },
            },
        },
    },
});

export default posts_theme;
