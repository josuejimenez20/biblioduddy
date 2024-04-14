import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {
    Container, Stack,
    TextField, Button,
    Typography, Link
} from '@mui/material';
import { RegisterUser as RegisterUserAction } from '../../redux/actions/RegisterUser';
import { createNewData } from '../../helpers/localstorage/createNewData';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme1'


export default function RegisterUser() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, success, userData } = useSelector((state) => state.login.register);

    useEffect(() => {
        if (success === true) {
            const userId = userData.data;
            createNewData('USERID', userId);
            window.location.reload();
            navigate('/');
        }
    }, [success])

    const handleLoginSubmit = (data) => {
        const formData = {
            email: data.target.email.value,
            password: data.target.password.value,
            name: data.target.name.value,
            lastname: data.target.lastname.value,
            second_lastname: data.target.second_lastname.value,
        }
        dispatch(RegisterUserAction(formData));
    }

    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth='sm'
            >

            <Typography variant="h4"
                sx={{textAlign: 'center' }}>
                Registro
            </Typography>

            <form id="login_form" className="form_class" method="submit"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleLoginSubmit(e)
                }}>
                <Stack mt={1}>

                    <TextField id='email' name='email' label='Email'
                        variant='standard' sx={{ marginBottom: 5, marginTop: 3 }} />
                    <TextField id='password' name='password' label='Password'
                        variant='standard' sx={{ marginBottom: 5 }} />
                    <TextField id='name' name='name' label='Name'
                        variant='standard' sx={{ marginBottom: 5 }} />
                    <TextField id='lastname' lastname='lastname' label='Lastname'
                        variant='standard' sx={{ marginBottom: 5 }} />
                    <TextField id='second_lastname' name='second_lastname'
                        label='Second Lastname' variant='standard' />
                    <Button type='submit' variant='outline'  // Añadí type='submit' al botón
                        sx={{ marginTop: 5, marginBottom: 3 }}>Enviar</Button>
                    <Link mb={3}
                        onClick={() => {
                            navigate('/Login')
                        }}>Ya tengo una cuenta</Link>
                </Stack>
            </form>
        </Container>
        </ThemeProvider>
    )
}
