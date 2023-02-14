import NavBar from '../components/NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
// import { Container, Card, Row, Col } from 'react-bootstrap'
import Carolselobj from '../components/Carousel';



const Home = () => {
    return (
        <div className='bg-img'>

            <NavBar />
            <br />
            <h1> Home Content </h1>
            < Carolselobj />



        </div>

    )
}

export default Home;