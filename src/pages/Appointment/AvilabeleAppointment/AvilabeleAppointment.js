import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';


const AvilabeleAppointment = ({ date }) => {
    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '8:00 AM-9:00 AM',
            space: '10 space available',
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '8:00 AM-9:00 AM',
            space: '10 space available',
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '8:00 AM-9:00 AM',
            space: '10 space available',
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '8:00 AM-9:00 AM',
            space: '10 space available',
        },
        {
            id: 5,
            name: 'Teeth Orthodonics',
            time: '8:00 AM-9:00 AM',
            space: '10 space available',
        },
        {
            id: 6,
            name: 'Teeth Orthodonics',
            time: '8:00 AM-9:00 AM',
            space: '10 space available',
        },
        // {
        //     id: 7,
        //     name: 'Teeth Orthodonics',
        //     time: '8:00 AM-9:00 AM',
        //     space: '10 space available'
        // }
    ]
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', fontWeight: 400, mb: 2 }}>Available Appointment {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }


            </Grid>
        </Container>
    );
};

export default AvilabeleAppointment;