import React from 'react'
import { Typography, Box, Container } from '@mui/material';
import home from '../themes/home';
import girl from '../../media/girl.jpg';

export default function Welcome() {
    return (
        <Container sx={home.mainContainer}>
        <Box sx={home.container}>
            <Typography variant="h1" sx={home.title}>
                Bienvenido a BiblioBuddy.
            </Typography>
            <Typography variant="h3" sx={home.subtitle}>
            Donde leer es más divertido y organizado.
            </Typography>
            <Typography variant="h6" sx={home.description}>
            Únete a los usuarios que usan BiblioBuddy y olvidaron por completo
 los tiempos en los que su lectura era difícil de seguir.
Hogar para aquellos usuarios que quieren que leer sea más simple, el inicio de una nueva era para lectores novatos e incluso y aire refrescante para aquellos veteranos
            </Typography>
            <Typography variant="h6" sx={home.quote}>
                "La mente es como un paracaídas, solo funciona cuando está abierta."
            </Typography>
            <Typography variant="subtitle1" sx={home.author}>
                - Albert Einstein
            </Typography>
        </Box>
        <Container maxWidth='xxxl'>
            <img src={girl} alt="Bibliobuddy" style={{ width: '55vh', height: '95vh' }} />
            </Container>
        </Container>
    )
}
