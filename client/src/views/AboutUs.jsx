import NavBar from '../components/NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Accordion, Container, Row, Col } from 'react-bootstrap'
import zarela from '../img/Zarela.png'
import murdock from '../img/Murdock.jpg'
import piper from '../img/Piper.png'
import harper from '../img/Harper.jpg'
import dmitriy from '../img/Dmitriy.jpg'
import quinn from '../img/quinn.jpg'
import ContactUs from '../components/Contact';
import banner from '../img/animalbanner.png'

const AboutUs = () => {
    return (
        <div>
            <NavBar />
            <img src={banner} alt="banner " style={{ width: '800px', marginTop: '-100px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            <h1 className='groomertitles' style={{ marginTop: '-50px' }} >Our Mission</h1>
            <Container className='d-flex justify-content-center' style={{ marginTop: '-25px' }}>
                <div>

                    <p className='aboutgroomers' >Our mission is to provide the highest quality pet grooming services in a safe,
                        caring and clean environment. We strive to exceed the expectations of our clients
                        and their beloved pets by delivering personalized attention and care to each individual animal.
                    </p>
                    <p className='aboutgroomers' >
                        Our commitment is to promote pet health and wellness,
                        and to make every visit to our grooming salon a positive and enjoyable experience for both the pet and the owner.
                    </p>
                </div>
            </Container>
            <h1 className='groomertitles' >Who we Are</h1>
            <Container className='d-flex justify-content-center' style={{ marginTop: '-25px' }}>
                <div className='aboutgroomers'>
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
            <Container >
                <h1 className='groomertitles' >Our Feral Front Desk</h1>
                <Row>
                    <Col >
                        <img src={quinn} alt="Quinn" style={{ width: '275px' }} />
                        <Accordion defaultActiveKey="0" style={{ width: '275px' }}>
                            <Accordion.Item>
                                <Accordion.Header>
                                    Quinn (she/her) <br /> Founder & Pet Enthusiast
                                </Accordion.Header>
                                <Accordion.Body>
                                    I have the opportunity to provide a service to pets and their owners and make a difference in their lives.
                                    Weather you are a cat or dog we embrace all!
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col>
                        <img src={dmitriy} alt="dmitriy" style={{ width: '275px' }} />
                        <Accordion defaultActiveKey="0" style={{ width: '275px' }}>
                            <Accordion.Item>
                                <Accordion.Header>
                                    Dmitriy (he/him) <br /> Operations Manager
                                </Accordion.Header>
                                <Accordion.Body>
                                    One of the most satisfying aspects of working with animals is being able to make a positive impact on their lives.
                                    The joy of interacting with animals is unmatched.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col>
                        <img src={harper} alt="harper" style={{ width: '275px' }} />
                        <Accordion defaultActiveKey="0" style={{ width: '275px' }}>
                            <Accordion.Item>
                                <Accordion.Header>
                                    Harper (she/her) <br /> Operations Specialist
                                </Accordion.Header>
                                <Accordion.Body>
                                    The bond that can form between human and animal is truly special, and it's a privilege to be a part of it.
                                    I love being around your Furrylicious friends!
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>


            {/* Botttom section */}

            <Container style={{ marginTop: '25px' }}>
                <h1 className='groomertitles' >Our Furry Friend Specialists</h1>
                <Row >
                    <Col>
                        <img src={zarela} alt="zarela" style={{ width: '275px' }} />
                        <Accordion defaultActiveKey="0" style={{ width: '275px' }}>
                            <Accordion.Item>
                                <Accordion.Header>
                                    Zarela (she/her) <br /> Lead Groomer
                                </Accordion.Header>
                                <Accordion.Body>
                                    I have years of experience in the industry,
                                    have a deep love and understanding of animals,
                                    and a commitment to making sure every pet looks and feels their best.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col>
                        <img src={murdock} alt="murdock" style={{ width: '275px' }} />
                        <Accordion defaultActiveKey="0" style={{ width: '275px' }}>
                            <Accordion.Item>
                                <Accordion.Header className='text-center'>
                                    Murdock (he/him)) <br /> Associate Groomer
                                </Accordion.Header>
                                <Accordion.Body>
                                    I provide a personalized approach to ensure your pet feels comfortable and looks their best.
                                    Trust me to bring out the beauty and confidence in your pet.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col>
                        <img src={piper} alt="piper" style={{ width: '275px' }} />
                        <Accordion defaultActiveKey="0" style={{ width: '275px' }}>
                            <Accordion.Item>
                                <Accordion.Header >
                                    Piper (she/her)) <br /> Groomer
                                </Accordion.Header>
                                <Accordion.Body>
                                    I am a passionate and experienced pet groomer dedicated to providing top-notch grooming for your furry friends.
                                    I transform even the scruffiest of pets.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
            <br />
            <ContactUs />
        </div>

    )
}

export default AboutUs;