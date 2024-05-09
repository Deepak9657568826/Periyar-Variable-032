import React from 'react';
import { Link } from 'react-router-dom';
import projectLogo from "../assets/projectLogo.jpg"


function Navbar(){
    return (
        <div className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Replace "Home" text with your website logo */}
                <Link to="/">
                    <img src={projectLogo} alt="Website Logo" className="h-8" />
                </Link>
                <div className="flex space-x-4">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/about" className="hover:text-gray-300">About Us</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
                    <Link to="/services" className="hover:text-gray-300">Services</Link>
                    <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
                    <Link to="/login" className="hover:text-gray-300">Login</Link>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
