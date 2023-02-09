import NavBar from '../components/NavBar'
import ContactUs from './Contact';
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
                <h2>Whiskers Bathing & Grooming</h2>
                <Row>
                    <Col>
                        <h3>Doggo Grooming</h3>
                        <p>All of our grooming services include bath, blow out, haircut, nails, anal glands, ear cleaning.</p>
                        <ul>
                            <li>Small Dogs (under 20 lbs) $49.99 </li>
                            <li>Medium Dogs (between 20-55 lbs) $69.99</li>
                            <li>Large Dogs (Over 55 lbs) $89.99</li>
                        </ul>
                        <hr />
                        <h3>Doggo Bathing</h3>
                        <p>Allof our bathing services include bath, brush out, anal glands, nails, complete face trim ( if applicable), ear cleaning.</p>
                        <ul>
                            <li>Small Dogs (under 20 lbs) $42.00 </li>
                            <li>Medium Dogs (between 20-55 lbs) $67.00</li>
                            <li>Large Dogs (Over 55 lbs) $85.00</li>
                        </ul>
                        <p>Additional charges for any dematting sercives</p>
                    </Col>
                    <Col>
                        <h3>Feline Grooming</h3>
                        <ul>
                            <li>Lions cut $85.00 </li>
                            <li>Comb cut $65.00</li>
                            <li>Maintenance cut(4 weeks or less) $45.00</li>
                            <li>Sanitary Cut $20.00</li>
                            <li>Bell Trim $20.00</li>
                            <li><span></span></li>
                        </ul>
                        <hr />
                        <h3>Feline Bathing</h3>
                        <p>Our bathing services include bath, blow dry, ear cleaning and toe nail trim.</p>
                        <ul>
                            <li>Purrfect Bath & Blowout $ 53.00 </li>
                        </ul>
                        <p>Additional charges for any dematting sercives.</p>
                    </Col>
                </Row>
                <Row>
                    <h2>Add-on & Walk in Services</h2>
                    <Col>
                        <h3>For our Doggos</h3>
                        <ul>
                            <li>De-shed Treatment $25.00</li>
                            <li>Ear Cleaning $5.00</li>
                            <li>Nail grinding $9.00</li>
                            <li>Nail trim $5.00 </li>
                            <li>Anal gland expression $10.00</li>
                            <li>Dental Hygiene $20.00</li>
                            <li>Flea/tick treatment (includes shampoo) $30.00</li>

                        </ul>


                    </Col>
                    <Col>For our Felines
                        <h3>For our Felines</h3>
                        <ul>
                            <li>De-shed Treatment $25.00</li>
                            <li>Nail trim with Ear Cleaning $17.00</li>
                            <li>Nail trim $10.00 </li>
                            <li>Anal gland expression $10.00</li>
                            <li>Dental Hygiene $20.00</li>
                            <li>Flea/tick treatment (includes shampoo) $25.00</li>
                        </ul>


                    </Col>

                </Row>
            </Container>
            <ContactUs />



        </div>

    )
}

export default Services;