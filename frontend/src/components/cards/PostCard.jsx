import React from 'react';
import {
    Card, CardActions, CardContent,
    Button, Typography
} from '@mui/material';

import { ThemeProvider } from "@mui/material/styles";
import posts_theme from "../themes/posts";

export default function PostCard({
    editFunction,
    deleteFunction,
    name = '',
    author = '',
    publication_date,
    image_path,
    post_id }) {
    return (
        <ThemeProvider theme={posts_theme}>
        <Card sx={{ width: '100%' }}>

            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant='body2' >
                    {author}
                </Typography>
                <Typography variant="body2">
                    {publication_date}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                    onClick={(() =>
                        editFunction(post_id))}>Editar</Button>
                <Button size="small"
                    onClick={(() =>
                        deleteFunction(post_id))}
                >Eliminar </Button>
            </CardActions>
        </Card>
        </ThemeProvider>
    );
}