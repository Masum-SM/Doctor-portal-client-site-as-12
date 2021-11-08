import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Review = ({ review }) => {
    const { des, img, name, address } = review
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, mt: 5 }}>
                <CardContent>
                    <Typography variant="h5" sx={{ fontSize: 16, textAlign: 'justify', color: 'gray' }} component="div">
                        {des}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', mt: 3 }}>
                        <Box>
                            <CardMedia
                                component="img"
                                style={{ width: '50px', margin: '0 auto' }}
                                image={img}
                                alt="green iguana"
                            />
                        </Box>
                        <Box>
                            <Typography variant="caption" sx={{ color: 'info.main', fontSize: 15 }} display="block" gutterBottom>
                                {name}
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                {address}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;