import NavBar from '../components/NavBar'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import ContactUs from '../components/Contact'
import UpdateForm from '../components/UpdateForm';

const Update = () => {
    return (
        <div>
            <NavBar />


            <UpdateForm />
            <br />

            <ContactUs />
        </div>

    )
}

export default Update;