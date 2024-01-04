import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Button
    , Avatar
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
            <Container maxWidth='xl' sx={{ bgcolor: 'white', height: '9vh', display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    onClick={(() => {
                        signOut()
                    })}
                >Cerrar Sesion</Button>
            </Container>
        </>
    );
}
