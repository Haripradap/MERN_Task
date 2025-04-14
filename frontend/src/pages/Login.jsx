import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate  = useNavigate();
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
              const res = await axios.post('http://localhost:5000/api/auth/login',{email,password});
              if(res.data.success)
              {
                localStorage.setItem("token",res.data.token)
                navigate('/');
              }
          } catch (error) {
              console.log(error);
              
          }
      }
  return (
    <div className=" flex justify-center items-center min-h-screen bg-gray-100">
    <div className=" border-2 shadow p-6 w-80 bg-white">
      <h2 className=" text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
       
        <div className="mb-4">
          <label className=" block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className=" w-full px-3 py-2 border"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email..."
            required
          />
        </div>
        <div className="mb-4">
          <label className=" block text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            className=" w-full px-3 py-2 border"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password..."
            required
          />
        </div>
        <button
          type=" submit"
          className=" w-full bg-teal-600 text-white py-2"
        >
          Login
        </button>
        <p className=" text-center">
          Dont't Have an Account?{" "}
          <Link to='/register' className=" text-teal-500">
            Signup
          </Link>
        </p>
      </form>
    </div>
  </div>
  )
}

export default Login