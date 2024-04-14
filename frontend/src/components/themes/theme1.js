import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
        background: {
            default: '#000',
        },
    },
    typography: {
        h3: {
            textAlign: 'center',
            margin: '6rem',
            color: '#000'
        },
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#000',
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    color: '#000',
                    margin:'3rem 0rem',
                    '&:before': {
                        borderColor: '#000', 
                    },
                    '&:hover': {
                        borderColor: '#000', 
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    margin: '1.5rem 0rem',
                    color: '#000',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    display: 'block',
                    textAlign: 'center',
                    color: '#000',
                    textDecoration:'none',
                    marginBottom: '1rem',
                    cursor: 'pointer',
                    '&:hover': {
                        color: '#000',
                    },
                },
            },
        },
    },
});

export default theme;
