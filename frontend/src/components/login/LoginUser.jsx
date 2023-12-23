import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Container, Stack,
    TextField, Button,
    Typography
} from '@mui/material';
import { LoginUser as LoginUserAction } from '../../redux/actions/LoginUser';

export default function LoginUser() {

    const dispatch = useDispatch();

    const { error, success } = useSelector((state) => state.login.login);

    useEffect(() => {
        console.log(success);
    }, [success])

    const handleLoginSubmit = (data) => {
        const formData = {
            email: data.target.email.value,
            password: data.target.password.value,
        }
        dispatch(LoginUserAction(formData));
    }

    return (
        <Container maxWidth='sm'
            sx={{ bgcolor: '#1A3366' }}>

            <Typography variant="h4"
                sx={{ color: 'skyblue', textAlign: 'center' }}>
                Iniciar Sesion
            </Typography>

            <form id="login_form" className="form_class" method="submit"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleLoginSubmit(e)
                }}>
                <Stack mt={1}>

                    <TextField id='email' name='email' label='Email'
                        variant='standard' sx={{ marginBottom: 5, marginTop: 3 }} />
                    <TextField id='password' name='password'
                        label='Password' variant='standard' />
                    <Button type='submit' variant='outline'  // Añadí type='submit' al botón
                        sx={{ marginTop: 5, marginBottom: 3 }}>Enviar</Button>
                </Stack>
            </form>
        </Container>
    )
}
