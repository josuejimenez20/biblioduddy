import React, { useEffect, useState } from 'react'
import { Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getLocalStorageData } from '../../helpers/localstorage/getData';

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
                    <Container maxWidth='xl'
                        sx={{
                            bgcolor: '#2C3E5F', height: '86vh',
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

                    </Container>
                    : <></>}
        </>
    )
}
