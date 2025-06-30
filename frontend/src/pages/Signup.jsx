import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-8 w-[90%] max-w-sm">
        <h1 className="text-3xl font-bold text-center font-serif mb-6">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-purple-500 
                       placeholder-gray-400 font-serif"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-purple-500 
                       placeholder-gray-400 font-serif"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-purple-500 
                       placeholder-gray-400 font-serif"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-700 to-pink-600 
                       hover:from-purple-800 hover:to-pink-700 
                       text-white py-2 rounded-full font-semibold transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
