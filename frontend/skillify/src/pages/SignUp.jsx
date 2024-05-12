import { Button, Center, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 
function SignUp() {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const loginWithGoogle = () => {
  //   window.open("http://localhost:6003/auth/google/callback", "_self");
  // };
  const handleSignUp = async () => {
    try {
      const response = await fetch('https://periyar-variable-032-nfcl.onrender.com/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        
        
        setTimeout(()=>{
          
          navigate("/login");
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
          title: "Register successfully"
        });
        console.log('User registered successfully');
      } else {
        // Handle error response
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div style={{backgroundColor:"#6a9ac4"}} className="loginpage flex justify-center items-center h-screen">
    
      <div className="flex-1 max-w-md px-4">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-center text-blue-700 text-2xl font-bold mb-4">
            <h1>Register to Skillify</h1>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              {/* Fullname */}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter fullname"
              value={name}
              onChange={(e) => setname(e.target.value)}/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              {/* Email */}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              {/* Password */}
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
         
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignUp}
            >
              Register
            </button>
          </div>
          {/* <div className="flex items-center justify-between">
            <button type="button" onClick={loginWithGoogle}>
              <FcGoogle style={{ fontSize: "40px" }} />
            </button>
          </div> */}
         
          <Center mt={8} p={8}>
      <Button boxShadow='xl' p='6' rounded='md' bg='white'
        w={'full'}
        maxW={'md'}
        // onClick={loginWithGoogle}
        leftIcon={<FcGoogle style={{ fontSize: "30px" }}/>}>
        <Center>
          <Text>Register with Google</Text>
        </Center>
      </Button>
    </Center>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
