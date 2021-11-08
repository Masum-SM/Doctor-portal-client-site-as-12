import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import Review from '../Review/Review';

const reviews = [
    {
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam nemo ad hic obcaecati nobis laborum eligendi itaque. Quae magni tempore excepturi repellendus necessitatibus similique?',
        img: people1,
        name: 'Winson Herry',
        address: 'California'
    },
    {
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam nemo ad hic obcaecati nobis laborum eligendi itaque. Quae magni tempore excepturi repellendus necessitatibus similique?',
        img: people2,
        name: 'Lucky Watson',
        address: 'Loss Angeles'
    },
    {
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam nemo ad hic obcaecati nobis laborum eligendi itaque. Quae magni tempore excepturi repellendus necessitatibus similique?',
        img: people3,
        name: 'Ema Wangru',
        address: 'India'
    },
]
const Reviews = () => {
    return (
        <Container>
            <Typography variant="h6" sx={{ color: 'info.main', fontWeight: 600, mt: 5 }} style={{ textAlign: 'left' }} display="block" gutterBottom>
                TESTIMONIAL
            </Typography>
            <Typography variant="h4" style={{ textAlign: 'left', fontWeight: 500 }} display="block" gutterBottom>
                What's Our Patient's <br />Says
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    reviews.map(review => <Review
                        key={review.name}
                        review={review}
                    ></Review>)
                }
            </Grid>
        </Container>
    );
};

export default Reviews;