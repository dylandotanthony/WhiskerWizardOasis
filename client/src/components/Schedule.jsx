import NavBar from '../components/NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Card, Row, Col } from 'react-bootstrap'
import ContactUs from '../components/Contact'
import {
    Link
} from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

const Schedule = (props) => {

    const { reservation, setReservation } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/reservations")
            .then((res) => {
                console.log(res.data);
                setReservation(res.data);
            })
            .catch((err) => console.log(err));
    }, [])


    console.log('reservation', reservation)
    return (
        <div>

            <h1 style={{ textAlign: "center", margin: "15px" }}>Whisker Schedule </h1>
            <div>

                {reservation.map((booking, index) => (
                    <Card key={index}>
                        <Card.Body>
                            <Card.Title>Pet Name: {booking.petName} </Card.Title>
                            <Card.Subtitle>Date: {booking.date} </Card.Subtitle>
                            <Card.Text> Service: {booking.service}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <br />

        </div>

    )
}

export default Schedule;