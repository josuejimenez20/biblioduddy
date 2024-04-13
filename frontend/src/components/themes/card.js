import { createTheme } from '@mui/material/styles';

const card = createTheme({
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
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#643f38',
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
                    color: '#643f38',
                    backgroundColor: '#f0dcd8',
                },
            },
        },
    },
});

export default card;
