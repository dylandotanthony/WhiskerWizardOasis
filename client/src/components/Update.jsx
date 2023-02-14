import NavBar from '../components/NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
// import { Container, Card, Row, Col } from 'react-bootstrap'
import ReservationForm from './ReservationForm';
import ContactUs from '../components/Contact'
import UpdateForm from '../views/UpdateForm';

const Update = () => {
    return (
        <div>
            <NavBar />
            <br />

            <br />
            <UpdateForm />
            <br />
            <ContactUs />
        </div>

    )
}

export default Update;