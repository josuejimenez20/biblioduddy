import { createTheme } from '@mui/material/styles';

const book = createTheme({
    palette: {
        primary: {
            main: '#376DCC',
        },
        background: {
            default: '#2A3142',
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
                    backgroundColor: '#455A64',
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
                    backgroundColor: '#FF4081',
                    '&:hover': {
                        backgroundColor: '##FF5091', 
                    },
                },
                contained: { 
                    width: '1rem',
                    height: '3.5rem',
                    position: 'fixed',
                    fontSize:'20px',
                    fontWeight:'bold', 
                    bottom: '2rem', 
                    right: '5rem',
                    borderRadius:'50%',
                    backgroundColor: '#00aa00',
                    '&:hover': {
                        backgroundColor: '#11dd11', 
                    },
                },
            },
        },
    },
});

export default book;
