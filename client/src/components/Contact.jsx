import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/WWOlogo.png'
import { Button } from 'react-bootstrap'


const contactstyle = {
    width: "800px",
    display: "flex",
    marginTop: '75px',
    marginBottom: '75px'
};
const btnstyle = {
    background: '#00ccff'
}

const ContactUs = () => {
    return (
        <div className=" d-grid mx-auto " style={contactstyle}>
            <Button style={btnstyle} size="lg" href='mailto:me@dylandotanthony.com'>
                Contact Us
            </Button>
        </div>
    );
}

export default ContactUs;