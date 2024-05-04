import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    Container, Stack,
    TextField, Button,
    Typography, Link,
    Alert
} from '@mui/material';
import { LoginUser as LoginUserAction } from '../../redux/actions/LoginUser';
import { createNewData } from '../../helpers/localstorage/createNewData';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme1'

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
        <ThemeProvider theme={theme}>
            <Container className="container">

                <Typography variant="h3" className="title">
                    Iniciar Sesión
                </Typography>

                {error ? <Alert severity="error" sx={{marginBottom: '2em'}}>
                    Ususario no encontrado
                </Alert>
                    : <></>}


                <form id="login_form" className="form_class" method="submit"
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleLoginSubmit(e)
                    }}>
                    <Stack >

                        <TextField id='email' name='email' label='Email' color='secondary'
                            variant='standard' className="textField" />
                        <TextField id='password' name='password' color='secondary'
                            label='Contraseña' variant='standard' type='password' />
                        <Button type='submit' variant='standard' className="button">Enviar</Button>
                        <Link mb={3}
                            onClick={() => {
                                navigate('/Login/Register')
                            }}>Registrarme</Link>
                    </Stack>
                </form>
            </Container>
        </ThemeProvider>
    )
}
