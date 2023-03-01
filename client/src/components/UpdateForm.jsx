import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateForm = (props) => {
    // const { reservation, setReservation } = props;
    const { id } = useParams();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [petName, setPetName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [petType, setPetType] = useState("")
    const [date, setDate] = useState("")
    const [service, setService] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);





    useEffect(() => {
        axios.get('http://localhost:8000/api/reservations/' + id)
            .then((res) => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setPetName(res.data.petName);
                setEmail(res.data.email);
                setPhoneNumber(res.data.phoneNumber);
                setPetType(res.data.petType)
                setDate(res.data.date)
                setService(res.data.service)
                console.log(res.data);
            })
            .catch(err => {
            })
    }, [])



    const updateReservation = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/reservations/' + id, {
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
                navigate("/reservations")
                setErrors('')
            })
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }


    return (
        <div>
            <br />
            <h1 className='text-center updateTitle '> Update Reservation for {petName} </h1>

            <Container style={{ marginLeft: '325px', marginBottom: '90px' }}>
                <Row>
                    <Col sm={8}>
                        <Container>
                            <Form onSubmit={updateReservation}>
                                {errors.map((err, index) => <p key={index}>{err}</p>)}
                                <Row className='mb-3'>
                                    <Form.Group as={Col}>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter first name" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                        {errors.firstName ? <p className='text-danger'>{errors.firstName.message}</p> : null}
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                        {errors.lastName ? <p className='text-danger'>{errors.lastName.message}</p> : null}
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Pet Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter pet name" name='petName' value={petName} onChange={(e) => setPetName(e.target.value)} />
                                        {errors.petName ? <p className='text-danger'>{errors.petName.message}</p> : null}
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3'>
                                    <Form.Group as={Col}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                        {errors.email ? <p className='text-danger'>{errors.email.message}</p> : null}
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="tel" placeholder="Enter phone Number" name='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                        {errors.phoneNumber ? <p className='text-danger'>{errors.phoneNumber.message}</p> : null}
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Date of Reservation</Form.Label>
                                        <Form.Control type="date" name='date' value={date} onChange={(e) => setDate(e.target.value)} />
                                        {errors.date ? <p className='text-danger'>{errors.date.message}</p> : null}
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3'>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Form.Label> Pet Type </Form.Label>
                                        <Form.Group value={petType} >
                                            <Form.Check className="form-check-inline" label='Cat' type="radio" name='petType' value='cat' checked={petType === "cat"} onChange={(e) => setPetType(e.target.value)} />
                                            <Form.Check className="form-check-inline" label='Dog' type="radio" name='petType' value='dog' checked={petType === "dog"} onChange={(e) => setPetType(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Form.Label> Grooming Package </Form.Label>
                                        <Form.Group value={service}>
                                            <Form.Check className="form-check-inline" label='Oasis Basic' type="radio" name='service' value='Oasis Basic' checked={service === "Oasis Basic"} onChange={(e) => setService(e.target.value)} />
                                            <Form.Check className="form-check-inline" label='Oasis +' type="radio" name='service' value='Oasis Plus' checked={service === "Oasis Plus"} onChange={(e) => setService(e.target.value)} />
                                            <Form.Check className="form-check-inline" label='Full Oasis ' type="radio" name='service' value='Full Oasis' checked={service === "Full Oasis"} onChange={(e) => setService(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Button variant="outline-info" type="submit" value="update" >Update</Button>
                                </Row>
                            </Form>
                        </Container>

                    </Col>
                </Row >
            </Container >

        </div >


    )
}

export default UpdateForm;