import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png'

const Care = () => {
    return (
        <Container sx={{ my: 5 }}>

            <Grid container spacing={2} sx={{ my: 5 }}>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '400px' }} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                    <Box style={{ textAlign: 'left' }}>
                        <Typography variant="h4" gutterBottom component="div" style={{ fontWeight: 600 }}>
                            Exceptional Dental <br /> Care,On Your Terms
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div" sx={{ my: 4 }} style={{ fontWeight: 300, fontSize: 16, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ad. Incidunt ipsam optio, consequuntur modi placeat distinctio maiores beatae libero dignissimos mollitia eum esse voluptatibus deleniti vero obcaecati dolor doloribus? Possimus recusandae, nemo repellendus fugiat officiis voluptates unde reprehenderit quia a nihil necessitatibus optio. Enim!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#59ceef' }}>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Care;