import NavBar from './NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import ReservationForm from './ReservationForm';
import ContactUs from './Contact'


const Reservation = () => {
    return (
        <div>
            <NavBar />
            <br />

            <br />
            <ReservationForm />
            <br />
            <ContactUs />
        </div>

    )
}

export default Reservation;