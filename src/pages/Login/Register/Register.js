import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

    const handleLogin = e => {
        if (loginData.password !== loginData.password2) {

            alert('Password does not matched')
            return;
        }
        registerUser(loginData.email, loginData.password);

        // alert('Successfully Submitted')
        e.preventDefault()
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register </Typography>

                    {<form onSubmit={handleLogin}>
                        <TextField
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            type='email'
                            onChange={handleOnChange}
                            variant="standard"
                            sx={{ width: '75%', m: 1 }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Your Password"
                            name='password'
                            onChange={handleOnChange}
                            variant="standard"
                            type='password'
                            sx={{ width: '75%', m: 1 }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Retype Your Password"
                            name='password2'
                            onChange={handleOnChange}
                            variant="standard"
                            type='password'
                            sx={{ width: '75%', m: 1 }}
                        />

                        <Button
                            variant='contained'
                            sx={{ width: '75%', m: 1 }}
                            type='submit'
                        >Register </Button>
                    </form>
                    }
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    <NavLink
                        to='/login'
                        style={{ textDecoration: 'none' }}
                    ><Button variant="text">Already Registerd? Please Login</Button></NavLink>


                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;