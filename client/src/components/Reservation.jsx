import NavBar from './NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
// import { Container, Card, Row, Col } from 'react-bootstrap'
import ReservationForm from './ReservationForm';
import ContactUs from './Contact'
import {
    Link
} from "react-router-dom";

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