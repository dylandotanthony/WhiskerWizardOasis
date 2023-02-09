import NavBar from '../components/NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Card, Row, Col } from 'react-bootstrap'
import zarela from '../img/Zarela.png'
import murdock from '../img/Murdock.jpg'
import piper from '../img/Piper.png'
import harper from '../img/Harper.jpg'
import dmitriy from '../img/Dmitriy.jpg'
import quinn from '../img/quinn.jpg'
// import ContactUs from '../components/Contact'

const Groomers = () => {
    return (
        <div>
            <NavBar />
            <br />
            <Container className='d-flex justify-content-center'>
                <div className='about'>
                    <p >
                        Our business was founded with the goal of creating a safe and comfortable environment for pets,
                        where they can receive high-quality grooming services in a stress-free setting.
                        We believe that regular grooming is not only important for the appearance of your pet,
                        but also for their overall health and well-being.
                    </p>
                    <p >
                        At Furry Friend Pet Grooming, we offer a range of services including bathing, trimming, clipping, teeth cleaning, and more.
                        Our team of professional groomers is trained to handle a variety of breeds and temperaments,
                        and we always work to ensure that each pet is comfortable and relaxed during their visit with us.
                    </p>
                    <p >
                        Thank you for considering Whisker Wizard Oasis for all of your pet grooming needs.
                        We look forward to building a long-lasting relationship with you and your furry friends.
                    </p>
                </div>
            </Container>


            <Container style={{ width: '800px' }}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={quinn} />
                            <Card.Body>
                                <Card.Title>Quinn (she/her) </Card.Title>
                                <Card.Subtitle> Founder & Pet Enthusiast </Card.Subtitle>
                                <Card.Text>
                                    I have the opportunity to provide a service to pets and their owners and make a difference in their lives.
                                    Weather you are a cat or dog we embrace all!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={dmitriy} />
                            <Card.Body>
                                <Card.Title>Dmitriy (he/him) </Card.Title>
                                <Card.Subtitle>Operations Manager</Card.Subtitle>
                                <Card.Text>
                                    One of the most satisfying aspects of working with animals is being able to make a positive impact on their lives.
                                    The joy of interacting with animals is unmatched.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col> </Col>
                </Row>
            </Container>


            {/* Botttom section */}

            <Container style={{ width: '800px' }} >
                <Row >
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={zarela} />
                            <Card.Body>
                                <Card.Title>Zarela (she/her) </Card.Title>
                                <Card.Subtitle> Lead Groomer</Card.Subtitle>
                                <Card.Text>
                                    I have years of experience in the industry,
                                    have a deep love and understanding of animals,
                                    and a commitment to making sure every pet looks and feels their best.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={murdock} />
                            <Card.Body>
                                <Card.Title>Murdock (he/him) </Card.Title>
                                <Card.Subtitle>Associate Groomer</Card.Subtitle>
                                <Card.Text>
                                    I provide a personalized approach to ensure your pet feels comfortable and looks their best.
                                    Trust me to bring out the beauty and confidence in your pet.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container style={{ width: '800px' }}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={piper} />
                            <Card.Body>
                                <Card.Title>Piper (she/her) </Card.Title>
                                <Card.Subtitle>Groomer</Card.Subtitle>
                                <Card.Text>
                                    I am a passionate and experienced pet groomer dedicated to providing top-notch grooming for your furry friends.
                                    I transform even the scruffiest of pets.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={harper} />
                            <Card.Body>
                                <Card.Title> Harper (she/her) </Card.Title>
                                <Card.Subtitle>Operations Specialist</Card.Subtitle>
                                <Card.Text>
                                    The bond that can form between human and animal is truly special, and it's a privilege to be a part of it.
                                    I love being around your Furrylicious friends!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Groomers;