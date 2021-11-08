import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import Bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appoinmentBanner = {
    background: `url(${Bg})`,
    backgroundColor: 'rgba(34,47,66,.9)',
    backgroundBlendMode: " darken, luminosity",
    marginTop: 150

}
const ApoinmentBanner = () => {
    return (
        <Box style={appoinmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: -110 }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }} md={6} >
                    <Box >
                        <Typography variant='h6' sx={{ mb: 3 }} style={{ color: '#59ceef' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3 }} style={{ color: 'white', fontWeight: 300, fontSize: 13 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident quas culpa dolor eum reiciendis consequuntur voluptatibus non. Adipisci, sunt.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#59ceef' }}>
                            Learn More
                        </Button>
                    </Box>
                </Grid>

            </Grid>
        </Box >
    );
};

export default ApoinmentBanner;