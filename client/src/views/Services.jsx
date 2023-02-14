import NavBar from '../components/NavBar'
import ContactUs from '../components/Contact';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Card, Row, Col } from 'react-bootstrap'

const Services = () => {
    return (
        <div>
            <NavBar />
            <br />
            <h1> Services Content </h1>
            <Container>
                <p>
                    Does your whiskered friend need a day at the Oasis?
                </p>
                <p>
                    We offer full-service dog grooming to any furry friend looking to get pampered.
                    From a soothing bath to thorough brushing, your pet will feel loved while spending time with our experienced groomers.
                    We strive to make your pet feel safe and at ease while we get them looking their best.
                </p>
                <br />
                <p>
                    Typically, cats are dealing with tangles, matted fur, fleas, dandruff,
                    hairballs, sharp and/or ingrown nails, shedding, greasiness, odors and unsanitary conditions.
                    No matter the issue, we are here to advise to the best of our ability and point you into the right direction.
                </p>
            </Container>
            <h1>Oasis Menu</h1>
            <Container>
                <h2 style={{ textAlign: 'center' }}>Whiskers Bathing & Grooming Packages</h2>
                <p style={{ textAlign: 'center' }}>All services include Vegan products , animal deodorant , and treats</p>
                <Row>
                    <Col>
                        <h3>Oasis Basic</h3>
                        <ul>
                            <li>Bubbly Bath</li>
                            <li>Blow out</li>
                            <li>Haircut</li>
                            <li>Toe Nail Trim</li>
                            <li>Anal Glad Expression</li>
                            <li>Ear Cleaning</li>
                        </ul>
                        <p>Additional charges for any dematting sercives</p>
                    </Col>
                    <Col>
                        <h3>Oasis + </h3>
                        <ul>
                            <li>Bubbly Bath</li>
                            <li>Blow out</li>
                            <li>Haircut</li>
                            <li>Toe Nail Trim</li>
                            <li>Anal Glad Expression</li>
                            <li>Ear Cleaning</li>
                            <li>Dental Hygiene Services</li>
                        </ul>
                        <p>Additional charges for any dematting sercives</p>

                    </Col>
                    <Col>
                        <h3>Full Oasis </h3>
                        <ul>
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
                        <p>Additional charges for any dematting sercives</p>


                    </Col>
                </Row>
            </Container>
            <ContactUs />



        </div>

    )
}

export default Services;