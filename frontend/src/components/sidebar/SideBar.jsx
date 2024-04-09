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
                        sx={{
                            height: '100vh',
                        }} >
                        <Button variant="contained" sx={{
                            bgcolor: 'black', width: '100%',
                            height: '7vh', mt: 9,
                            borderRadius: '10%'
                        }}
                            onClick={() => {
                                navigate('/Home/Currently')
                            }}
                        >Libros Actuales</Button>

                        <Button variant="contained" sx={{
                            bgcolor: 'black', width: '100%',
                            height: '10vh', mt: 5,
                            borderRadius: '10%'
                        }} onClick={() => {
                            navigate('/Home/Pending')
                        }}>Libros pendientes por leer</Button>

                        <Button variant="contained" sx={{
                            bgcolor: 'black', width: '100%',
                            height: '7vh', mt: 5,
                            borderRadius: '10%'
                        }} onClick={() => {
                            navigate('/Home/History')
                        }}>Libros Leidos</Button>

                        <Button variant="contained" sx={{
                            bgcolor: 'black', width: '100%',
                            height: '10vh', mt: 5,
                            borderRadius: '10%'
                        }} onClick={() => {
                            navigate('/Home/WishList')
                        }}>Libros pendientes por comprar</Button>

                        <Button variant="contained" sx={{
                            bgcolor: 'black', width: '100%',
                            height: '5vh', mt: 5,
                            borderRadius: '10%',
                            fontSize: '0.8em'
                        }} onClick={() => {
                            navigate('/Home/myposts')
                        }}>MIS POSTS</Button>

                        <Button variant="contained" sx={{
                            bgcolor: 'black', width: '100%',
                            height: '5vh', mt: 5,
                            borderRadius: '10%',
                            fontSize: '0.8em'
                        }} onClick={() => {
                            navigate('/Home/WishList')
                        }}>EXPLOAR POSTS</Button>

                    </Container>
                    </ThemeProvider>
                    : <></>}
        </>
    )
}
