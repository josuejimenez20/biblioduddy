import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    Container, Stack,
    TextField, Button,
    Typography, Link
} from '@mui/material';
import { LoginUser as LoginUserAction } from '../../redux/actions/LoginUser';
import { createNewData } from '../../helpers/localstorage/createNewData';

export default function LoginUser() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, success, userData } = useSelector((state) => state.login.login);

    useEffect(() => {
        if (success === true) {
            const userId = userData.data[0].user_id;
            createNewData('USERID', userId);
            window.location.reload();
            navigate('/');
        }
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
            sx={{ bgcolor: '#2A3142', height: '80vh' }}>
            <br />
            <br />
            <br />
            <Typography variant="h3"
                sx={{ color: '#376DCC', textAlign: 'center' }}>
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
                    <Link color="inherit" mb={3}
                        onClick={() => {
                            navigate('/Login/Register')
                        }}>Registrarme</Link>
                </Stack>
            </form>
        </Container>
    )
}
