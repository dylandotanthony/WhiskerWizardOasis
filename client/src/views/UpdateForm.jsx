import NavBar from '../components/NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Button, Card, Row, Col, Form } from 'react-bootstrap'
import {
    Link
} from "react-router-dom";
import { useState } from 'react';



const UpdateForm = (props) => {
    const { reservation, setreservation } = props;
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [petName, setPetName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [petType, setPetType] = useState("")
    const [date, setDate] = useState("")
    const [service, setService] = useState({
        services: [],
        response: [],
    });

    const handleChange = (e) => {
        const { value, checked } = e.target
        const { services } = service;

        console.log(`${value} is ${checked}`);
        if (checked) {
            setService({
                services: [...services, value],
                response: [...services, value],
            });
        }
        else {
            setService({
                services: services.filter((e) => e !== value),
                response: services.filter((e) => e !== value),
            });
        }
    };



    return (
        <div>
            <br />
            <h1> Reservation FOrm Content </h1>

            <Container>
                <Row>
                    <Col sm={8}>
                        <Container>
                            <Form >
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
                                            <h2 style={{ textAlign: 'center' }} >Select Service</h2>
                                            <Col>
                                                <h3>For our Doggos</h3>
                                                <h4>Doggo Grooming</h4>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Small Dog Groom' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Small Dog Groom</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Medium Dog Groom' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Medium Dog Groom</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Large Dog Groom' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Large Dog Groom</label>
                                                </div>
                                                <br />
                                                <h4>Doggo Bathing</h4>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Small Dog Bath' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Small Dog Bath</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Medium Dog Bath' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Medium Dog Bath</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Large Dog Bath' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Large Dog Bath</label>
                                                </div>
                                                <br />
                                                <h4>Add-on & Walk in Services</h4>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='De-shed Treatment' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">De-shed Treatment</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Ear Cleaning' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Ear Cleaning</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Nail Grinding' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Nail grinding</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Nail Trim' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Nail trim</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Anal Gland Expression' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Anal gland expression</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Dental Hygiene' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Dental Hygiene</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Flea/tick Treatment' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Flea/tick treatment</label>
                                                </div>
                                            </Col>
                                            <Col>
                                                <h3>For our Felines</h3>
                                                <h4>Feline Grooming</h4>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Lion Cut' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Lions cut</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Comb Cut' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Comb cut</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Maintenance Cut' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Maintenance cut</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Sanitary Cut' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Sanitary Cut</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Bell trim' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Bell Trim</label>
                                                </div>
                                                <br />
                                                <h4>Feline Bathing</h4>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Purrfect Bath & Blowout' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Purrfect Bath & Blowout</label>
                                                </div>
                                                <br />
                                                <h4>Add-on & Walk in Services</h4>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='De-shed Treatment' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">De-shed Treatment</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Nail trim with Ear Cleaning' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Nail trim with Ear Cleaning</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Nail trim' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Nail trim</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Anal gland expression' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Anal gland expression</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Dental Hygiene' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Dental Hygiene</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" name="service" type="checkbox" value='Flea/tick treatment' id="flexCheckDefault" onChange={handleChange} />
                                                    <label className="form-check-label">Flea/tick treatment</label>
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
                                <Button>View Current Schedule </Button>
                            </Col>
                            <Col>
                                <Link to={'/updatereservation'}>
                                    <Button>Change Reservation </Button>
                                </Link>
                                <textarea
                                    className="form-control text"
                                    name="response"
                                    value={service.response}
                                    placeholder="The checkbox values will be displayed here "
                                    id="floatingTextarea2"
                                    style={{ height: "150px" }}
                                    onChange={handleChange}
                                ></textarea>
                            </Col>

                        </Row>




                    </Col>
                </Row>
            </Container>
        </div>






    )
}

export default UpdateForm;