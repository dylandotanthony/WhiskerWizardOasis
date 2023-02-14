import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { grey } from '@material-ui/core/colors';


const contactstyle = {
    width: "100%",
    marginTop: '75px',
    background: 'grey'

};
const btnstyle = {
    background: '#00ccff'
}

const ContactUs = () => {
    return (
        <div className="" style={contactstyle}>

            <p>Make phone</p>
            <p>Make adress</p>
            <p>Make Socials</p>
            <button href='mailto:me@dylandotanthony.com'>Email Us!</button>

        </div>
    );
}

export default ContactUs;