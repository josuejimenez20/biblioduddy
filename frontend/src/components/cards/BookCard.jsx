import React from 'react';
import {
    Box, Card, CardActions, CardContent,
    Button, Typography
} from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import card from '../themes/card'

export default function BookCard({
    editFunction,
    deleteFunction,
    name,
    author,
    gender,
    publication_date,
    editorial,
    image_path,
    bookId }) {
    return (
        <ThemeProvider theme={card}>
        <Card sx={{ minWidth: 275}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="#C0C8DA" gutterBottom>
                    {gender}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="#C0C8DA">
                    {author}
                </Typography>
                <Typography variant="body2">
                    {editorial}
                    <br />
                    <br />
                    {publication_date}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                    onClick={(() =>
                        editFunction({
                            name: name,
                            author: author,
                            gender: gender,
                            publication_date: publication_date,
                            editorial: editorial,
                            image_path: image_path,
                            bookId: bookId
                        }))}>Editar</Button>
                <Button size="small"
                 onClick={(() =>
                    deleteFunction({
                        bookId: bookId
                    }))}
                >Eliminar </Button>
            </CardActions>
        </Card>
        </ThemeProvider>
    );
}