import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Button
} from '@mui/material';
import { removeLocalStorageData } from '../../helpers/localstorage/removeData';

export default function MenuBar() {

    const navigate = useNavigate();

    const signOut = (() => {
        removeLocalStorageData('USERID');
        window.location.reload();
        setTimeout(() => {
            navigate('/Login');
        }, 1000);
    })

    return (
        <>
            <Container maxWidth='xl' sx={{ bgcolor: '#643f38', height: '6rem', display: 'flex', justifyContent: 'flex-end' }}>
                <Button sx={{color: 'white'}}
                    onClick={(() => {
                        signOut()
                    })}
                >Cerrar Sesión</Button>
            </Container>
        </>
    );
}
