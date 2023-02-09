import NavBar from './NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Button, Card, Row, Col, Form } from 'react-bootstrap'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();




const options = [
    { value: 'small dog groom', label: 'Small Dog Groom' },
    { value: 'small dog groom', label: 'Medium Dog Groom' },
    { value: 'small dog groom', label: 'Large Dog Groom' },
    { value: 'small dog bath', label: 'Small Dog Bath' },
    { value: 'small dog bath', label: 'Medium Dog Bath' },
    { value: 'small dog bath', label: 'Large Dog Bath' },
    { value: 'lion cut', label: 'Lion Cut' },
    { value: 'comb cut', label: 'Comb Cut' },
    { value: 'maintenance cut', label: 'Maintenance Cut' },
    { value: 'sanitary cut', label: 'Sanitary Cut' },
    { value: 'bell trim', label: 'Bell trim' },
    { value: 'cat bath', label: 'Purrfect Bath & Blowout' },
    { value: '', label: 'De-shed Treatment' },
    { value: '', label: 'Ear Cleaning' },
    { value: '', label: 'Nail Grinding' },
    { value: '', label: 'Nail Trim' },
    { value: '', label: 'Anal Gland Expression' },
    { value: '', label: 'Dental Hygiene' },
    { value: '', label: 'Flea/tick Treatment' }
]

const groomoptions = [
    { value: 'zarela', label: 'Zarela' },
    { value: 'murdock', label: 'Murdock' },
    { value: 'piper', label: 'Piper' }
]

const UpdateForm = () => {
    return (
        <div>
            <NavBar />
            <br />
            <h1> Reservation Form Content </h1>

            <Container>
                <Row>
                    <Col sm={8}>
                        <Container>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Control type="text" placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" placeholder="Last name" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" placeholder="Pet name" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="tel" placeholder="Phone Number" />
                                    </Col>
                                    <Col>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="radioDefault" id="formRadioDefault" />
                                            <label class="form-check-label" for="formRadioDefault">Cat</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="radioDefault" id="formRadioDefault" />
                                            <label class="form-check-label" for="formRadioDefault">Dog</label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Control type="date" />
                                    </Col>
                                    <Col>
                                        <Select options={options}
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isMulti
                                            placeholder="Select Service"
                                        />
                                    </Col>
                                    <Col>
                                        <Select options={groomoptions}
                                            closeMenuOnSelect={true}
                                            isClearable
                                            placeholder="Select Groomer"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button type="submit">Make Reservation</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>

                    </Col>
                    <Col sm={4}>
                        <Row>
                            <Col>
                                <Button>Update Reservation</Button>
                            </Col>
                            <Col>
                                <Button>Delete Reservation </Button>
                            </Col>

                        </Row>




                    </Col>
                </Row>
            </Container>
        </div>






    )
}

export default UpdateForm;