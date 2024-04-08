import { createTheme } from '@mui/material/styles';

const card = createTheme({
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
                },
            },
        },
    },
});

export default card;
