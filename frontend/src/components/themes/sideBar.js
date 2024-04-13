import { createTheme } from '@mui/material/styles';

const sideBar = createTheme({
    palette: {
        primary: {
            main: '#f0dcd8',
        },
        background: {
            default: '#f0dcd8',
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
                    backgroundColor: '#643f38',
                    borderRadius:'2rem' 
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius:'10%',
                    textTransform: 'none',
                    margin: '1.5rem 0rem',
                    color: '#643f38',
                    backgroundColor: '#f0dcd8',
                    fontFamily: '"Roboto Slab", serif', 
                    padding: '10px',
                    '&:hover': {
                        backgroundColor: '#f0dcd8',
                    },
                },
            },
        },
    },
});

export default sideBar;
