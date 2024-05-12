// AllRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import ContactUS from './pages/ContactUS';
import PostYourService from './pages/PostYourService';
import ServiceDescription from './pages/ServiceDescription';


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={< ContactUS/>} /> {/* Updated path and component */}
      <Route path="/services" element={<Services />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/postyourservice" element={<PostYourService />} />
      <Route path="/singleservice/:id" element={<ServiceDescription/>}/>
    </Routes>
  );
}

export default AllRoutes;
