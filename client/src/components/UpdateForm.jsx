import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import { Link, useParams, useNavigate } from "react-router-dom";
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
            .catch((err) => console.log(err));
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
            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <br />
            <h1> Update {petName}'s Reservation </h1>

            <Container>
                <Row>
                    <Col sm={8}>
                        <Container>
                            <Form onSubmit={updateReservation}>
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
                                            <input className="form-check-input" type="radio" name='petType' value='cat' checked={petType === 'cat'} onChange={(e) => setPetType(e.target.value)} />
                                            <label className="form-check-label" >Cat</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name='petType' value='dog' checked={petType === 'dog'} onChange={(e) => setPetType(e.target.value)} />
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
                                        <Row id='services'>
                                            <h2 style={{ textAlign: 'center' }} >Select Grooming Package</h2>
                                            <Col >
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name='service' value='OasisBasic' checked={service === 'OasisBasic'} onChange={(e) => setService(e.target.value)} />
                                                    <label className="form-check-label" >Oasis Basic</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name='service' value='OasisPlus' checked={service === 'OasisPlus'} onChange={(e) => setService(e.target.value)} />
                                                    <label className="form-check-label" >Oasis +</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name='service' value='FullOasis' checked={service === 'FullOasis'} onChange={(e) => setService(e.target.value)} />
                                                    <label className="form-check-label" >Full Oasis</label>
                                                </div>
                                            </Col>

                                        </Row>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <Button type="submit" value="update" >Update</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>

                    </Col>
                </Row>
            </Container>

        </div>


    )
}

export default UpdateForm;