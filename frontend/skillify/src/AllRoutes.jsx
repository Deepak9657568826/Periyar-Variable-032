// AllRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import ContactUS from './pages/ContactUS';


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={< ContactUS/>} /> {/* Updated path and component */}
      <Route path="/services" element={<Services />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AllRoutes;
