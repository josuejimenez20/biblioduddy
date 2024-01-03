import React from 'react';
import {
    Box, Card, CardActions, CardContent,
    Button, Typography
} from '@mui/material';

export default function BookCard({
    editFunction,
    name,
    author,
    gender,
    publication_date,
    editorial,
    image_path,
    bookId }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {gender}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
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
                <Button size="small">Eliminar </Button>
            </CardActions>
        </Card>
    );
}