import { createTheme } from '@mui/material/styles';

const book = createTheme({
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
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f0dcd8',
                    borderRadius: '10%', 
                    padding:'30px'
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h5: {
                    fontFamily: '"Roboto Slab", serif',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    margin: '1.5rem 0rem',
                    color: 'white',
                    backgroundColor: '#f0dcd8',
                    '&:hover': {
                        backgroundColor: '#f0dcd8', 
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
    },
});

export default book;
