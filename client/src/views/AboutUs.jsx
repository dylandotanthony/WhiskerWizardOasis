import NavBar from '../components/NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
// import { Container, Card, Row, Col } from 'react-bootstrap'
import ContactUs from '../components/Contact'
// import Groomers from '../components/Groomers'

const AboutUs = () => {
    return (
        <div>
            <NavBar />
            <h1>Our Mission</h1>
            <p>Our mission is to provide the highest quality pet grooming services in a safe,
                caring and clean environment. We strive to exceed the expectations of our clients
                and their beloved pets by delivering personalized attention and care to each individual animal.
                Our commitment is to promote pet health and wellness,
                and to make every visit to our grooming salon a positive and enjoyable experience for both the pet and the owner.</p>
            <ContactUs />
        </div>

    )
}

export default AboutUs;