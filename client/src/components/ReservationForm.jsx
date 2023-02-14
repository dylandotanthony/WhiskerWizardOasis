import * as React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import {
    Link
} from "react-router-dom";
import axios from 'axios';


const ReservationForm = (props) => {

    const { reservation, setReservation } = props;
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [petName, setPetName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [petType, setPetType] = useState("")
    const [date, setDate] = useState("")
    const [service, setService] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/reservations', {
            firstName,
            lastName,
            petName,
            email,
            phoneNumber,
            petType,
            date,
            service
        })
            .then(res => {
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                // setReservation([...reservation, res.data])
                // setFirstName("");
                // setLastName("");
                // setPetName("");
                // setEmail("");
                // setPhoneNumber("");
                // setPetType("");
                // setDate("");
                // setService("");
                // console.log(service)
                setReservation([...reservation, res.data])
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <br />
            <h1> Reservation FOrm Content </h1>

            <Container>
                <Row>
                    <Col sm={8}>
                        <Container>
                            <Form onSubmit={onSubmitHandler}>
                                <Row>
                                    <Col>
                                        <Form.Control type="text" placeholder="First name" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" placeholder="Last name" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" placeholder="Pet name" name='petName' value={petName} onChange={(e) => setPetName(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Control type="email" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </Col>
                                    <Col>
                                        <Form.Control type="tel" placeholder="Phone Number" name='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </Col>
                                    <Col>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name='petType' value='cat' onChange={(e) => setPetType(e.target.value)} />
                                            <label className="form-check-label" >Cat</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name='petType' value='dog' onChange={(e) => setPetType(e.target.value)} />
                                            <label className="form-check-label" >Dog</label>
                                        </div>
                                    </Col>
                                    <Col>
                                        <Form.Control type="date" name='date' value={date} onChange={(e) => setDate(e.target.value)} />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <Row id='serveice'>
                                            <h2 style={{ textAlign: 'center' }} >Select Grooming Package</h2>
                                            <Col>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name='service' value='Oasis Basic' onChange={(e) => setService(e.target.value)} />
                                                    <label className="form-check-label" >Oasis Basic</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name='service' value='Oasis +' onChange={(e) => setService(e.target.value)} />
                                                    <label className="form-check-label" >Oasis +</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name='service' value='Full Oasis' onChange={(e) => setService(e.target.value)} />
                                                    <label className="form-check-label" >Full Oasis</label>
                                                </div>
                                            </Col>

                                        </Row>




                                    </Col>

                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <Button value="create" type="submit"  >Make Reservation</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>

                    </Col>
                    <Col sm={4}>
                        <Row>
                            <Col>
                                <Link to={'/updatereservation'}>
                                    <Button>Change Reservation </Button>
                                </Link>

                            </Col>

                        </Row>




                    </Col>
                </Row>
            </Container>
        </div>






    )
}


export default ReservationForm;