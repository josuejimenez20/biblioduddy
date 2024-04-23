import { createTheme } from '@mui/material/styles';

const form = createTheme({
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
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: '1rem 0px',
                    width: '100% !important',  
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
            },
        },
    },
});

export default form;
