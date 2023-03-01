import React, { useState } from 'react';
import ReservationForm from '../components/ReservationForm';
import Schedule from '../components/Schedule';
import NavBar from '../components/NavBar';
import ContactUs from '../components/Contact';

const Main = (props) => {

    const [reservation, setReservation] = useState([]);

    return (
        <div>
            <div >

                <NavBar />
            </div>
            <br />

            <ReservationForm reservation={reservation} setReservation={setReservation} />
            <hr style={{ width: '800px', marginLeft: '275px' }} />
            <Schedule reservation={reservation} setReservation={setReservation} />
            <br />
            <ContactUs />

        </div>
    )
}
export default Main;