
import './App.css';
import AboutUs from './components/AboutUs';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Groomers from './components/Groomers';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Reservation from './components/Reservations';



function App() {
  return (
    <BrowserRouter>
      <div >

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index element={<NavBar />} />
          <Route path="/groomer" element={<Groomers />} />
          <Route path="/whatwedo" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reservations" element={<Reservation />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
