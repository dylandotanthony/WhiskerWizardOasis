import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import cat1 from '../img/carosel/cat1.jpg'
import cat2 from '../img/carosel/cat2.jpg'
import cat3 from '../img/carosel/cat3.png'
import dog1 from '../img/carosel/dog1.jpg'
import dog2 from '../img/carosel/dog2.jpg'
import dog3 from '../img/carosel/dog3.jpg'




const Carolselobj = () => {
    return (
        <div style={{ width: "250px" }}>

            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cat1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={dog1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cat2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={dog2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cat3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={dog3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carolselobj;