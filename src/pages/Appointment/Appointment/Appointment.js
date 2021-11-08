import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvilabeleAppointment from '../AvilabeleAppointment/AvilabeleAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvilabeleAppointment date={date}></AvilabeleAppointment>
        </div>
    );
};

export default Appointment;