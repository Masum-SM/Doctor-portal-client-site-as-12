import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'

import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';


const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}
const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }} style={bannerBg}>
            <Grid container spacing={2}>
                <Grid item style={{ textAlign: 'left', ...verticalCenter }} xs={12} md={6}>
                    <Box>
                        <Typography variant='h3'>
                            Your New Smile <br />Starts Here.
                        </Typography>
                        <Typography variant='h6' sx={{ my: 4, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad officiis quisquam dolorum reiciendis beatae impedit blanditiis facere vero id esse?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#59ceef' }}>Get Appointment</Button>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img
                        src={chair}
                        style={{ width: 350 }}
                        alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;