import { createTheme } from '@mui/material/styles';

const home = createTheme({
    mainContainer:{
        
        width: '100%',
    },
    container: {
        marginTop:'5rem',
        display: 'flex',
        flexDirection: 'column',
        marginRight: '18.5rem',
        width: '100vh',
        left:'10px',
    },
    title: {
        fontSize: '5.5rem',
        fontWeight: 'bold',
        color: '#6d2e9b',
        marginBottom: '3rem', 
    },
    subtitle: {
        fontSize: '1.5rem',
        marginBottom: '2rem',
        color: '#6d2e9b',
        fontWeight:'bold',
    },
    description: {
        fontSize: '1.2rem',
        fontStyle: 'italic',
        color: '#6d2e9b', 
        marginBottom: '4rem',
    },
    quote: {
        fontSize: '1.2rem',
        fontStyle: 'italic',
        color: '#6d2e9b', 
        marginBottom: '1rem',
    },
    author: {
        fontSize: '1rem',
        marginBottom: '2rem',
        color: '#6d2e9b',
    },
    MuiImage: { 
        styleOverrides: {
            root: {

            },
        },
    },
});

export default home;
