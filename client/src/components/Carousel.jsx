
import zarela from '../img/Zarela.png'
import murdock from '../img/Murdock.jpg'
import piper from '../img/Piper.png'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'

const UncontrolledExample = () => {
    return (
        <div style={{ width: "250px" }}>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={zarela}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={murdock}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={piper}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default UncontrolledExample;