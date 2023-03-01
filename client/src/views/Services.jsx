import NavBar from '../components/NavBar'
import ContactUs from '../components/Contact';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Alert, Row, Col } from 'react-bootstrap'
import grooming from '../img/DogGroom.jpg';
import cat from '../img/cat.jpg';

const Services = () => {
    return (
        <div >
            <NavBar />
            <br />
            <div  >
                <Container >
                    <Row style={{ marginLeft: '60px' }} >
                        <Col >
                            <img src={grooming} alt="scissors" style={{ width: '300px', borderRadius: '15%' }} />
                        </Col>
                        <Col >
                            <h1 className='serviceTitle '> What We Do </h1>
                        </Col>
                        <Col >
                            <img src={cat} alt="scissors" style={{ width: '300px', borderRadius: '15%' }} />
                        </Col>
                    </Row>
                </Container>
                <br />

                <div style={{ width: '850px', marginLeft: '300px', }}>

                    <p className='servicetext text-center fw-bold fs-4'>
                        Does your whiskered friend need a day at the Oasis?
                    </p>
                    <p className='servicetext'>
                        We offer full-service dog grooming to any furry friend looking to get pampered.
                        From a soothing bath to thorough brushing, your pet will feel loved while spending time with our experienced groomers.
                        We strive to make your pet feel safe and at ease while we get them looking their best.
                    </p>
                    <p className='servicetext'>
                        Typically, cats are dealing with tangles, matted fur, fleas, dandruff,
                        hairballs, sharp and/or ingrown nails, shedding, greasiness, odors and unsanitary conditions.
                        No matter the issue, we are here to advise to the best of our ability and point you into the right direction.
                    </p>
                </div>
                <div style={{ marginTop: '-25px' }}>
                    <h1 className='serviceTitle' >Oasis Menu</h1>
                    <p style={{ textAlign: 'center' }}>Whiskers bathing & grooming packages all include use of vegan products , animal deodorant , and treats</p>
                    <Alert variant='warning' className='warning'>
                        <p className='text-center '>Additional charges for any dematting sercives</p>
                    </Alert>
                </div>
                <Container>
                    <Row>
                        <Col >
                            <h3 className='basictitle' >Oasis Basic</h3>
                            <ul className='servicedeets'>
                                <li>Bubbly Bath</li>
                                <li>Blow out</li>
                                <li>Haircut</li>
                                <li>Toe Nail Trim</li>
                                <li>Anal Glad Expression</li>
                                <li>Ear Cleaning</li>
                            </ul>
                        </Col>
                        <Col>
                            <h3 className='plustitle'>Oasis + </h3>
                            <ul className='servicedeets'>
                                <li>Bubbly Bath</li>
                                <li>Blow out</li>
                                <li>Haircut</li>
                                <li>Toe Nail Trim</li>
                                <li>Anal Glad Expression</li>
                                <li>Ear Cleaning</li>
                                <li>Dental Hygiene Services</li>
                            </ul>

                        </Col>
                        <Col>
                            <h3 className='fulltitle'>Full Oasis </h3>
                            <ul className='servicedeets'>
                                <li>Bubbly Bath</li>
                                <li>Blow out</li>
                                <li>Haircut</li>
                                <li>Toe Nail Trim</li>
                                <li>Anal Glad Expression</li>
                                <li>Ear Cleaning</li>
                                <li>Dental Hygiene Services</li>
                                <li>De-shed Treatment</li>
                                <li>Bow or Bandana</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <ContactUs />
        </div>

    )
}

export default Services;