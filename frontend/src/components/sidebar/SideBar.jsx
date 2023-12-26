import React from 'react'
import { Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SideBar() {

    const navigate = useNavigate();

    return (
        <Container maxWidth='xl'
            sx={{ bgcolor: 'white', height: '86vh' }} >
            <Button variant="contained" sx={{
                bgcolor: 'black', width: '100%',
                height: '7vh', mt: 9
            }}
                onClick={() => {
                    navigate('/Home/Currently')
                }}
            >Libros Actuales</Button>

            <Button variant="contained" sx={{
                bgcolor: 'black', width: '100%',
                height: '7vh', mt: 5
            }} onClick={() => {
                navigate('/Home/Pending')
            }}>Libros pendientes por leer</Button>

            <Button variant="contained" sx={{
                bgcolor: 'black', width: '100%',
                height: '7vh', mt: 5
            }} onClick={() => {
                navigate('/Home/History')
            }}>Libros Leidos</Button>

            <Button variant="contained" sx={{
                bgcolor: 'black', width: '100%',
                height: '7vh', mt: 5
            }} onClick={() => {
                navigate('/Home/WishList')
            }}>Libros pendientes por comprar</Button>

        </Container>
    )
}
