import NavBar from '../components/NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
// import { Container, Card, Row, Col } from 'react-bootstrap'
import Carolselobj from '../components/Carousel';
import ContactUs from '../components/Contact';



const Home = () => {
    return (
        <div >
            <div className='bg-img'>
                <NavBar />
                <br />
                <h1> Home Content </h1>

            </div>
            <div>

                < Carolselobj />
            </div>
            <br />
            <div>

                < ContactUs />
            </div>

        </div>

    )
}

export default Home;