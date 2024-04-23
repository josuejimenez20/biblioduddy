import React, { useEffect, useState } from 'react'
import { Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getLocalStorageData } from '../../helpers/localstorage/getData';

import { ThemeProvider } from '@mui/material/styles';
import sideBar from './../themes/sideBar';

export default function SideBar() {

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const localStorageUserId = getLocalStorageData('USERID');
        setUserId(localStorageUserId);
    }, [])

    const navigate = useNavigate();

    return (
        <>
            {
                userId ?
                <ThemeProvider theme={sideBar}>
                    <Container maxWidth='xl'
                     >
                        <Button variant="text"
                            onClick={() => {
                                navigate('/Home/Currently')
                            }}
                        >Libros Actuales</Button>

                        <Button variant="text" onClick={() => {
                            navigate('/Home/Pending')
                        }}>Pendientes por leer</Button>

                        <Button variant="text" onClick={() => {
                            navigate('/Home/History')
                        }}>Libros Leídos</Button>

                        <Button variant="text" onClick={() => {
                            navigate('/Home/WishList')
                        }}>Lista de deseados</Button>

                        <Button variant="text" onClick={() => {
                            navigate('/Home/myposts')
                        }}>Mis Posts</Button>

                        <Button variant="text" onClick={() => {
                            navigate('/Home/post/all')
                        }}>Explorar Posts</Button>

                    </Container>
                    </ThemeProvider>
                    : <></>}
        </>
    )
}
