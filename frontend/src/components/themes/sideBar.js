import { createTheme } from '@mui/material/styles';

const sideBar = createTheme({
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
        MuiContainer: {
            styleOverrides: {
                root: {
                    backgroundColor: '#455A64',
                    borderRadius:'10%' 
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
                    fontFamily: '"Roboto Slab", serif', 
                    padding: '10px',
                    '&:hover': {
                        backgroundColor: '#FF2D55',
                    },
                },
            },
        },
    },
});

export default sideBar;
