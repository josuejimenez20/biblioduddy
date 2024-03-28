import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'white',
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    color: 'white',
                    margin:'3rem 0rem',
                    '&:before': {
                        borderColor: 'white', 
                    },
                    '&:hover': {
                        borderColor: 'white', 
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    margin: '1.5rem 0rem',
                    color: 'white',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    display: 'block',
                    textAlign: 'center',
                    color: 'white',
                    textDecoration:'none',
                    marginBottom: '1rem',
                    cursor: 'pointer',
                    '&:hover': {
                        color: 'white',
                    },
                },
            },
        },
    },
});

export default theme;
