import { Button, Center, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

import { FcGoogle } from "react-icons/fc";
import {  useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import Swal from"sweetalert2"

function Login() {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:6003/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: name, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, save tokens to localStorage if rememberMe is checked
        if (rememberMe) {
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
        } else {
          sessionStorage.setItem('accessToken', data.accessToken);
          sessionStorage.setItem('refreshToken', data.refreshToken);
        }
        setTimeout(()=>{
          
          navigate("/");
        },2000)
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
          title: "Login successfully"
        });
      } else {
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
          icon: "error",
          title: "Login Failed"
        });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred. Please try again later.');
    }
  };


  // const loginWithGoogle = () => {
  //   window.open("http://localhost:6003/auth/google/callback", "_self");
  // };


  return (
    <div  style={{backgroundColor:"#6a9ac4"}}  className="loginpage flex justify-center items-center h-screen">
      <div className="flex-1 max-w-md px-4">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="text-center text-blue-700 text-2xl font-bold mb-4">
            <h1>Login to Skillify</h1>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rememberMe">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="text-sm">Remember me</span>
            </label>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>

          <Center mt={8} p={8}>
      <Button boxShadow='xl' p='6' rounded='md' bg='white'
        w={'full'}
        maxW={'md'}
        // onClick={loginWithGoogle}
        leftIcon={<FcGoogle style={{ fontSize: "30px" }}/>}>
        <Center>
          <Text>Login with Google</Text>
        </Center>
      </Button>
    </Center>

        </form>
      </div>
    </div>
  );
}

export default Login;
