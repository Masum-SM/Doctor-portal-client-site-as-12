import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import Cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ratione magnam, dicta, corporis molestiae atque illum omnis saepe, voluptate accusamus quod? Non minima autem eligendi maxime at nostrum aut aspernatur.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ratione magnam, dicta, corporis molestiae atque illum omnis saepe, voluptate accusamus quod? Non minima autem eligendi maxime at nostrum aut aspernatur.',
        img: Cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ratione magnam, dicta, corporis molestiae atque illum omnis saepe, voluptate accusamus quod? Non minima autem eligendi maxime at nostrum aut aspernatur.',
        img: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" component="div" sx={{ color: 'success.main', fontWeight: 500, m: 2 }}>
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 600, m: 2 }}>
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;