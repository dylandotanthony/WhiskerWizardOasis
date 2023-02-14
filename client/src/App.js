
import './App.css';
import AboutUs from './views/AboutUs';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Groomers from './views/Groomers';
import Home from './views/Home';
import NavBar from './components/NavBar';
import Services from './views/Services';
import Reservation from './components/Reservation';
import Update from './components/Update';
import UpdateForm from './views/UpdateForm';
import Schedule from './components/Schedule';
import Main from './views/main';
import ReservationForm from './components/ReservationForm';



function App() {

  return (
    <BrowserRouter>
      <div >

        <Routes>
          <Route element={<Main />} path="/reservations" />
          {/* <Route path="/home" element={<ReservationForm />} />
          <Route path="/home" element={<Schedule />} /> */}
          <Route index path="/" element={<Home />} default />
          <Route index element={<NavBar />} />
          {/* Static Components */}
          <Route path="/groomer" element={<Groomers />} />
          <Route path="/whatwedo" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />



          <Route path="/update" element={<Update />} />
          <Route path="/updatereservation" element={<UpdateForm />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
