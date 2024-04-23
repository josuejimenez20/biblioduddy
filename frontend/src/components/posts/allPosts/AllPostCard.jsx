import React from 'react';
import {
    Card, CardActions, CardContent,
    Button, Typography
} from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import posts from '../../themes/posts'

export default function AllPostCard({
    viewFunction,
    name = '',
    author = '',
    publication_date,
    image_path,
    post_id }) {
    return (
        <ThemeProvider theme={posts}>
        <Card>

            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography >
                    {author}
                </Typography>
                <Typography variant="body2">
                    {publication_date}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                    onClick={(() =>
                        viewFunction(post_id))}>Mirar
                </Button>

            </CardActions>
        </Card>
        </ThemeProvider>
    );
}