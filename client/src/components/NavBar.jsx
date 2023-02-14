import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/WWOlogo.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {
    Link
} from "react-router-dom";

const linkstyle = { textDecoration: "none", color: "#30393b" }

// const navstyle = {
//     background: 'linear-gradient(30deg, #ccf5ff, #ffffff)',
//     height: "50px",
//     // margin: "100px 200px 0px 200px",

//     float: 'left',

// }

// const bannerstyle = {
//     marginTop: '100px',
//     marginBottom: '0px',
//     maxWidth: '100px',
// }

const NavBar = () => {
    return (
        <div >
            <Navbar  >
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
                    <Nav className="me-auto " >
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Item >
                                    <Nav.Link>
                                        <Link style={linkstyle} to={'/'}>
                                            Home
                                        </Link>

                                    </Nav.Link>
                                </Nav.Item>
                                <NavDropdown className='text-dark' title="About" id="basic-nav-dropdown">
                                    <NavDropdown.Item style={linkstyle} >
                                        <Link style={linkstyle} to={'/whatwedo'}>
                                            What We Do
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item  >
                                        <Link style={linkstyle} to={'/groomer'}>
                                            Groomers
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
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
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar >
        </div >
    );
}

export default NavBar;