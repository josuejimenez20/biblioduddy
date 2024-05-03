import React from 'react';
import {
    Card, Typography,
    Stack, Button
} from '@mui/material';

export default function CardBook({
    title,
    author,
    description,
    imagePath,
    buyLink
}) {
    return (
        <Card>
            <Stack direction='row'>
                <Stack>

                    <Typography variant='h4'>
                        {title}
                    </Typography>
                    <Typography variant='h5'>
                        {author}
                    </Typography>
                </Stack>
                <img src={imagePath} />
                <Typography variant='h6'>
                    {description}
                </Typography>
                <Button variant='contained'>Comprar</Button>
            </Stack>
        </Card>
    )
}
