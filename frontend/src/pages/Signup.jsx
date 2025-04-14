import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register',{name,email,password});
            if(res.data.success)
              {
                navigate('/login');
              }
            
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div className=" flex justify-center items-center min-h-screen bg-gray-100">
      <div className=" border-2 shadow p-6 w-80 bg-white">
        <h2 className=" text-2xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className=" block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              className=" w-full px-3 py-2 border"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name..."
              required
            />
          </div>
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
            Signup
          </button>
          <p className=" text-center">
            Already Have an Account?{" "}
            <Link to='/login' className=" text-teal-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
