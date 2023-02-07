import NavBar from '../components/NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
// import { Container, Card, Row, Col } from 'react-bootstrap'
import UncontrolledExample from '../components/Carousel';

// const homejpgstyle = {

//     opacity: 0.5,
//     maxWidth: "100%",
// }





const Home = () => {
    return (
        <div className='bg-img'>

            <NavBar />
            <br />
            <h1> Home Content </h1>
            < UncontrolledExample />



        </div>

    )
}

export default Home;