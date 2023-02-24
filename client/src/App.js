
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
import Update from './views/Update';
import UpdateForm from './components/UpdateForm';
import Main from './views/main';



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



          <Route path="/reservations/update/:id" element={<UpdateForm />} />
          {/* <Route path="/updatereservation" element={<UpdateForm />} /> */}
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
