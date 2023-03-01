import * as React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import axios from 'axios';
import banner from '../img/dogBanner.png'


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
    const [errors, setErrors] = useState({});

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
            service,

        })
            .then(res => {
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                setReservation([...reservation, res.data])
                setFirstName('');
                setLastName('');
                setPetName('');
                setEmail('');
                setPhoneNumber('');
                setPetType('');
                setDate('');
                setService('');
                alert('Reservation Scheduled!');
                setErrors('')
            })
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });

    }


    return (
        <div >
            <img alt='banner' src={banner} style={{ width: '750px', marginLeft: '300px', borderRadius: '25px', marginBottom: '15px' }} />
            <div style={{ marginLeft: '325px' }}>
                <Container>
                    <Row>
                        <Col sm={8}>
                            <Container>
                                <Form onSubmit={onSubmitHandler}>
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
                                    <Row className='mb-3' >
                                        <Col style={{ textAlign: 'center' }}>
                                            <Form.Label> Pet Type </Form.Label>
                                            <Form.Group value={petType} >
                                                <Form.Check className="form-check-inline" label='Cat' type="radio" name='petType' value='cat' onChange={(e) => setPetType(e.target.value)} />
                                                <Form.Check className="form-check-inline" label='Dog' type="radio" name='petType' value='dog' onChange={(e) => setPetType(e.target.value)} />
                                                {errors.petType ? <p className='text-danger'>{errors.petType.message}</p> : null}
                                            </Form.Group>
                                        </Col>
                                        <Col style={{ textAlign: 'center' }}>
                                            <Form.Label> Grooming Package </Form.Label>
                                            <Form.Group name='service'>
                                                <Form.Check className="form-check-inline" label='Oasis Basic' type="radio" value='Oasis Basic' onChange={(e) => setService(e.target.value)} />
                                                <Form.Check className="form-check-inline" label='Oasis +' type="radio" value='Oasis Plus' onChange={(e) => setService(e.target.value)} />
                                                <Form.Check className="form-check-inline" label='Full Oasis ' type="radio" value='Full Oasis' onChange={(e) => setService(e.target.value)} />
                                                {errors.service ? <p className='text-danger'>{errors.service.message}</p> : null}
                                            </Form.Group>

                                        </Col>
                                    </Row>

                                    <br />
                                    <Row>
                                        <Button variant="outline-success" value="create" type="submit">Make Reservation</Button>
                                    </Row>
                                </Form>
                            </Container>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div >






    )
}


export default ReservationForm;