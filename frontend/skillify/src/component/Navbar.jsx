// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// // import projectLogo from "../assets/projectLogo.jpg"
// import { AuthContext } from './AuthContext';
// import Swal from"sweetalert2"

// function Navbar(){
//     const {isLoggedIn,setLoggedIn} = useContext(AuthContext);
//     const handleLogout = ()=>{
//         localStorage.removeItem("accessToken");
//         setLoggedIn(false)
//         const Toast = Swal.mixin({
//             toast: true,
//             position: "top-end",
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//               toast.onmouseenter = Swal.stopTimer;
//               toast.onmouseleave = Swal.resumeTimer;
//             }
//           });
//           Toast.fire({
//             icon: "success",
//             title: "Logout successfully"
//           });
//     }
//     return (
//         <div className="bg-gray-800 text-white py-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 <Link to="/">
//                 <h2 className="block mr-2 w-30 text-2xl font-serif font-bold">
//             Skillify
//         </h2>
//                 </Link>
//                 <div className="flex space-x-4">
//                     <Link to="/" className="hover:text-gray-300">Home</Link>
//                     <Link to="/about" className="hover:text-gray-300">About Us</Link>
//                     <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
//                     <Link to="/services" className="hover:text-gray-300">Services</Link>
                    
//                 {!isLoggedIn.isAuth && (<><Link to="/signup" className="hover:text-gray-300">Sign Up</Link><Link to="/login" className="hover:text-gray-300">Login</Link></>)}
//                 {isLoggedIn.isAuth && <Link onClick={handleLogout} className='hover:text-gray-300'>Logout</Link>}
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Swal from"sweetalert2"
import profileIcon from "../assets/userprofile_icon2.png"


function Navbar(){

    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(AuthContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = ()=>{
        localStorage.removeItem("accessToken");
        setLoggedIn(false)
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Logout successfully"
          });
    }

    return (
        <div className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <h2 className="block mr-2 w-30 text-2xl font-serif font-bold">
                        Skillify
                    </h2>
                </Link>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/about" className="hover:text-gray-300">About Us</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
                    <Link to="/services" className="hover:text-gray-300">Services</Link>
                    {!isLoggedIn.isAuth && <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>}
                    
                    {!isLoggedIn.isAuth? (
                        <Link to="/login" className="hover:text-gray-300">Login</Link>
                    ):(
                        <div className='hidden md:block'>
                            <img src={profileIcon} alt="Profile Icon" className="h-8 w-8 rounded-full" />
                        </div>
                    )}
                </div>

                

                <div className="md:hidden flex gap-2">

                    {isLoggedIn.isAuth && (
                        <img src={profileIcon} alt="Profile Icon" className="h-8 w-8 rounded-full" />
                    )}
                    <button
                     className="text-gray-300 hover:text-white focus:outline-none"
                     onClick={toggleMenu}
                     >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6">
                            <path fillRule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 10a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM3 15a1 1 0 100 2h14a1 1 0 100-2H3z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link to="/" className="block hover:text-gray-300">Home</Link>
                    <Link to="/about" className="block hover:text-gray-300">About Us</Link>
                    <Link to="/contact" className="block hover:text-gray-300">Contact Us</Link>
                    <Link to="/services" className="block hover:text-gray-300">Services</Link>
                    {!isLoggedIn.isAuth && <Link to="/signup" className="block hover:text-gray-300">Sign Up</Link>}
                    {isLoggedIn.isAuth ? (
                        <button onClick={handleLogout} className="block hover:text-gray-300">Logout</button>
                    ) : (
                        <Link to="/login" className="block hover:text-gray-300">Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Navbar;

