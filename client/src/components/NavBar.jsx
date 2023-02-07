import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/WWOlogo.png'
import { Container, Nav, Navbar, } from 'react-bootstrap'

const linkstyle = { color: "#30393b" }

const navstyle = {
    background: 'linear-gradient(30deg, #ccf5ff, #ffffff)', width: "1200px",
    height: "50px",
    margin: "100px 200px 0px 200px"
};

const NavBar = () => {
    return (
        <div>
            <Navbar style={navstyle}>
                <Container >
                    <Navbar.Brand href="#home" >
                        <img
                            alt=""
                            src={logo}
                            width="125"
                            height="125"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Nav className="me-auto ">
                        <Nav.Link style={linkstyle} href="#home">Home</Nav.Link>
                        <Nav.Link style={linkstyle} href="#about">About Us</Nav.Link>
                        <Nav.Link style={linkstyle} href="#services">Services</Nav.Link>
                        <Nav.Link style={linkstyle} href="#Reservations">Reservations</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;