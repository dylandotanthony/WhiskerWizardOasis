import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/WWOlogo.png'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";

const linkstyle = { textDecoration: "none", color: "#30393b" }


const NavBar = () => {
    return (
        <div >
            <Navbar >
                <Container >
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="125"
                            height="125"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Nav className="me-auto" >
                        <Nav.Link>
                            <Link style={linkstyle} to={'/'}>
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link style={linkstyle} to={'/whoweare'}>
                                Who We Are
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link style={linkstyle} to={'/services'}>
                                Services
                            </Link>
                        </Nav.Link>
                        <Nav.Link  >
                            <Link style={linkstyle} to={'/reservations'}>
                                Reservations
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar >
        </div >
    );
}

export default NavBar;