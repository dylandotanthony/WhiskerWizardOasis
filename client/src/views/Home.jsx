import NavBar from '../components/NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import Carolselobj from '../components/Carousel';
import ContactUs from '../components/Contact';
import {
    Link
} from "react-router-dom";



const Home = () => {
    return (
        <div >
            <div className='bg-img'>
                <NavBar />
                <br />
                <h1 style={{ marginLeft: '300px' }} id='welcome'> Welcome to </h1>
                <h1 className='text-center' id='welcome'> Whisker Wizard Oasis</h1>


            </div>
            <Row>
                <Col xs={3}>
                    <div style={{ position: 'relative', bottom: 160, left: 50 }}>
                        < Carolselobj />
                    </div>
                </Col>
                <Col xs={6} className='mt-2 '>
                    <Card style={{ width: '40rem', }} >
                        <Card.Body className='pay1' >
                            <Card.Title className='fw-bold '>Our Values Inform Employee
                                Pay and is Reflected in Our Pricing</Card.Title>
                            <Card.Text >
                                Here at Whisker Wizard Oasis we do not rush the work.
                                We use sharp scissors and blades on an animal that may be dancing, singing, jumping, licking our face, purring, or barking/meowing and trying to bite or scratch.
                                Some of those behaviors are the reason we love animals (especially animals that hug!).
                                And some of the behavior causes the service to take extra time for safety.
                                We appreciate your understanding and will do our best to communicate in real time when this happens.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card style={{ width: '18rem', }} className='mt-2 '>
                        <Card.Body className='contactelement'>
                            <Card.Title className='fw-bold'  > Need to make a reservation? </Card.Title>
                            <Card.Text className='text-center'>
                                Call us at (705)-250-0638
                            </Card.Text>
                            <Link to='/reservations'>
                                <Button style={{ marginLeft: '45px' }} variant="outline-secondary">
                                    Make a Reservation
                                </Button>{' '}
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Container style={{ marginTop: '-50px' }}>
                <Row>
                    <Col>
                        <div className='petHealth1'>
                            <h3 className=' text-center petHealth2'>Pet Health</h3>
                            <p className='petHealth3'>We require that every grooming client be up to date on all their
                                vaccinations and that you bring your vaccination history and verification upon appointment arrival
                                <br />
                                <br />
                                If you have any questions on vaccinations please contact us
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='guarantee1'>
                            <h3 className='text-center guarantee2'>Our Guarantee</h3>
                            <p className=' guarantee3'>We want you to be 100% satisfied with the grooming services you receive.
                                After every grooming service, our stylists will review the groom with you to make sure you are happy!
                                If you notice anything that you don’t like when you get home,
                                please call us within 24 hours so that we can alter your pet’s groom to your liking.
                                Changes without charge can be made within 24 hours only.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='covid1'>
                            <h3 className='text-center covid2'>COVID-19 Policy</h3>
                            <p className='covid3'>
                                We are doing our part to help during this time of the pandemic. We sterilize our salon regularly to ensure a safe environment.
                                Whisker Wizard Oasis is insured, licensed, and regularly inspected by the Department of Agriculture. All of our groomers are fully vaccinated.
                                <br />
                                <br />
                                If you have any questions on our COVID protocols please contact us
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
                < ContactUs />
            </div>

        </div>

    )
}

export default Home;