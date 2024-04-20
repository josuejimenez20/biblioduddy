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
        MuiContainer: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    //alignItems: 'center',
                    minHeight: '100vh', 
                    width: '50%',
                    marginLeft:'35.5%',
                },
            },
        },
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
                    margin:'2rem 0rem',
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
                    fontsize: '20px',
                    textTransform: 'none',
                    fontFamily: 'verdana',
                    margin: '1.5rem 0rem',
                    color: '#000',
                    padding: '1rem',
                    '&:hover': {
                        backgroundColor: '#ead9fb',
                        border:'none', 
                    },
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
                    fontFamily: 'verdana',
                    padding: '1rem',
                    '&:hover': {
                        color: '#000',
                        backgroundColor: '#ead9fb',
                    },
                },
            },
        },
    },
});

export default theme;
