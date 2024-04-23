import { createTheme } from '@mui/material/styles';

const card = createTheme({
    palette: {
        primary: {
            main: '#f0dcd8',
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
                    backgroundColor: '#401F71',
                    borderRadius: '10px', 
                    padding:'15px',
                    color: '#000',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            },
        },
        MuiBox:{

        },
        MuiTypography: {
            styleOverrides: {
                h5: {
                    fontFamily: '"Roboto Slab", serif',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            },
        },
        
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    margin: '1.5rem 0rem',
                    color: '#643f38',
                    backgroundColor: '#ead9fb',
                },
            },
        },
    },
});

export default card;
