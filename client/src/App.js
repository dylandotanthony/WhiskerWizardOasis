
import './App.css';
import AboutUs from './views/AboutUs';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from './views/Home';
import Services from './views/Services';
import Update from './views/Update';
import Main from './views/main';



function App() {

  return (
    <BrowserRouter>
      <div >

        <Routes>
          <Route element={<Main />} path="/reservations" />
          <Route index path="/" element={<Home />} default />
          <Route path="/whoweare" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reservations/update/:id" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
