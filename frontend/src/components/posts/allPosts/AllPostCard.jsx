import React from 'react';
import {
    Card, CardActions, CardContent,
    Button, Typography
} from '@mui/material';

export default function AllPostCard({
    viewFunction,
    name = '',
    author = '',
    publication_date,
    image_path,
    post_id }) {
    return (
        <Card sx={{
            minWidth: 275, backgroundColor: '#354056', color: 'white',
            borderRadius: '2%', marginTop: '1em'
        }}>

            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="#C0C8DA">
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
    );
}