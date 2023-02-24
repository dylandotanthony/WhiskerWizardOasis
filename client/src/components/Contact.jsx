import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import phone from '../img/telephone-fill.svg';
import geo from '../img/geo-fill.svg';
import email from '../img/email.svg';
import instagram from '../img/instagram.svg';
import facebook from '../img/facebook.svg'


const contactstyle = {
    width: "100%",
    marginTop: '75px',
    background: '#8cdded',
    height: '40px'

};
const btnstyle = {
    background: '#00ccff'
}

const ContactUs = () => {
    return (
        <div className="d-flex p-2 justify-content-evenly " style={contactstyle}>

            <div >
                <p><img src={phone} alt="phone" />  (705)-250-0638</p>
            </div>
            <div className="d-flex flex-row">



                <p><img src={geo} alt="geo" /> 677 Arrowhead St. Klamath Falls, OR 97603</p>
            </div>
            <div>
                <p style={{ marginRight: '5px' }}>Connect with Us!
                    <span style={{ marginRight: '10px' }}></span>
                    <img src={email} alt="email" href='mailto:dylan@dylandotanthony.com' />
                    <span style={{ marginRight: '10px' }}></span>
                    <img src={instagram} alt="facebook" href='https://www.facebook.com/' />
                    <span style={{ marginRight: '10px' }}></span>
                    <img src={facebook} alt="instagram" href='https://www.instagram.com/' />


                </p>
                <div className="d-flex justify-content-evenly">
                </div>
            </div>

        </div>
    );
}

export default ContactUs;