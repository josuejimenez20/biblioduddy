import { createTheme } from '@mui/material/styles';

const home = createTheme({
    mainContainer:{
        display: 'flex',
        flexDirection: 'row',
        height: 'auto',
        margin:'0rem',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin:'5rem',
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
                width: '20%', // Para que ocupe el 20% del espacio
            },
        },
    },
});

export default home;
