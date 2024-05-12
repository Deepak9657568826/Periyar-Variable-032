import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import projectLogo from "../assets/projectLogo.jpg"
import { AuthContext } from './AuthContext';


function Navbar(){
    const {isLoggedIn,setLoggedIn} = useContext(AuthContext);
    const handleLogout = ()=>{
        localStorage.removeItem("accessToken");
        setLoggedIn(false)
    }
    return (
        <div className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <img src={projectLogo} alt="Website Logo" className="h-8" />
                </Link>
                <div className="flex space-x-4">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/about" className="hover:text-gray-300">About Us</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
                    <Link to="/services" className="hover:text-gray-300">Services</Link>
                    
                {!isLoggedIn.isAuth && (<><Link to="/signup" className="hover:text-gray-300">Sign Up</Link><Link to="/login" className="hover:text-gray-300">Login</Link></>)}
                {isLoggedIn.isAuth && <Link onClick={handleLogout} className='hover:text-gray-300'>Logout</Link>}
                </div>
            </div>
        </div>
    );
}
export default Navbar;
