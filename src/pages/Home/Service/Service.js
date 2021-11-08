import { Grid } from '@mui/material';
import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


const Service = ({ service }) => {
    const { name, img, description } = service;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: 90, margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description}

                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default Service;