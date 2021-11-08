import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

    const handleLogin = e => {

        loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login </Typography>

                    <form onSubmit={handleLogin}>
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

                        <Button
                            variant='contained'
                            sx={{ width: '75%', m: 1 }}
                            type='submit'
                        >Login </Button>


                        <NavLink
                            to='/register'
                            style={{ textDecoration: 'none' }}
                        ><Button variant="text">New User? Please Register</Button></NavLink>

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}

                    </form>



                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;