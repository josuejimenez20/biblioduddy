import React from 'react'
import { Typography } from '@mui/material';

export default function Welcome() {
    return (
        <>
            <Typography variant="h1" gutterBottom
                textAlign='center'>
                Bienvenido
            </Typography>
            <Typography variant="h3" gutterBottom
                textAlign='center'>
                Donde administras el conocimiento
            </Typography>
            <Typography variant="h6" gutterBottom
                textAlign='center' mt={5}>
                "La educación es el arma más poderosa que puedes usar para cambiar el mundo."
            </Typography>
            <Typography variant="subtitle1" gutterBottom
                textAlign='center'>
                - Nelson Mandela
            </Typography>
            <Typography variant="h6" gutterBottom
                textAlign='center' mt={3}>
                "La mente es como un paracaídas, solo funciona cuando está abierta."
            </Typography>
            <Typography variant="subtitle1" gutterBottom
                textAlign='center'>
                - Albert Einstein
            </Typography>
        </>
    )
}
