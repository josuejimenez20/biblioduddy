import { createTheme } from '@mui/material/styles';

const menuBar = createTheme({
    palette: {
        primary: {
            main: '#f0dcd8',
        },
        background: {
            default: '#ffffff', 
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
                    backgroundColor: '#ffffff',
                    borderBottom: '2px solid #e7e7e7', 
                    height: '6rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius:'1.5rem .2rem',
                    textTransform: 'none',
                    margin: '0 10px',
                    color: '#6d2e9b',
                    fontFamily: '"Arial", serif', 
                    padding: '10px',
                    fontSize:'2.5vh',
                    //backgroundColor: '#d9bbf7',
                    '&:hover': {
                        backgroundColor: '#ead9fb',
                    },
                },
            },
        },
        MuiImage: { 
            styleOverrides: {
                root: {
                    width: '15px',
                    height: '15px',
                },
            },
        },
    },
});

export default menuBar;
