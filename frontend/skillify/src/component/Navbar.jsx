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

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from './AuthContext';
// import Swal from"sweetalert2"
// import profileIcon from "../assets/userprofile_icon2.png"
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import projectLogo from "../assets/projectLogo.jpg"
import { AuthContext } from './AuthContext';
import Swal from"sweetalert2"

function Navbar(){
    const {isLoggedIn,setLoggedIn} = useContext(AuthContext);
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
