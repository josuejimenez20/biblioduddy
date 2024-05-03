import React from 'react';
import { Card, Typography } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import form from '../themes/add';

export default function CardComment({
    userName,
    userLastName,
    comment
}) {
    return (
        <ThemeProvider theme={form}>
        <Card sx={{marginBottom: '2em', width: 'auto'}}>
            <Typography sx={{marginBottom: '2em', width: 'auto', textAlign:'center'}} variant='body2' marginBottom={1}>
                {userName} {userLastName}
            </Typography>
            <Typography variant='body1'>
                {comment}
            </Typography>
        </Card>
        </ThemeProvider>
    )
}
