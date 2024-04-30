import React from 'react';
import { Card, Typography } from '@mui/material';

export default function CardComment({
    userName,
    userLastName,
    comment
}) {
    return (
        <Card sx={{marginBottom: '2em', width: 'auto'}}>
            <Typography variant='body2' marginBottom={1}>
                {userName} {userLastName}
            </Typography>
            <Typography variant='body1'>
                {comment}
            </Typography>
        </Card>
    )
}
