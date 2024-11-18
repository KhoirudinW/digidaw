import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl font-bold mb-2">DIGIDAW</h1>
          <p className="text-gray-300">A good of future</p>
        </div>

        {/* Register Card */}
        <div className="bg-navy-900 bg-opacity-80 rounded-lg p-8">
          <h2 className="text-2xl text-white font-bold mb-6">Create an account</h2>
          
          <div className="text-sm text-gray-300 mb-6">
            Already have an account? 
            <Link to="/login" className="text-cyan-400 hover:text-cyan-300 ml-1">
              Log in
            </Link>
          </div>

          <form action="/home">
            <div className="space-y-4">
              {/* Nama Depan dan Belakang dalam satu baris */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nama depan"
                  className="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="text"
                  placeholder="Nama belakang"
                  className="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <button
                type="submit"
                className="w-full p-3 rounded-md bg-cyan-400 hover:bg-cyan-500 text-white font-medium transition duration-200"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;