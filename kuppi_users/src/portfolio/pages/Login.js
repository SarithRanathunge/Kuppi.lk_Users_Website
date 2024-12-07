import React, { useState, useContext } from 'react';
import logo from "../../assets/Kuppi.lk_logo_bgblue.png"; // Import logo image
import Google from "../../assets/google_logo.png"; // Import Google logo image
import { useNavigate } from 'react-router-dom'; // Import navigate for routing
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext to use authentication methods

const Login = () => {
  const navigate = useNavigate(); // Hook to navigate to other pages
  const { loginUser } = useContext(AuthContext); // Access loginUser method from AuthContext

  const [email, setEmail] = useState(''); // State to store email input
  const [password, setPassword] = useState(''); // State to store password input
  const [error, setError] = useState(''); // State to store error message if fields are empty

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Check if email or password fields are empty
    if (!email || !password) {
      setError('Please fill in all fields'); // Set error message if any field is empty
      return;
    }

    // If fields are not empty, login the user
    loginUser('approved', 'nibm'); // Mock login with 'approved' status and 'nibm' university
    setError(''); // Reset error message after successful login attempt
    navigate('/student/home'); // Navigate to the student's home page after login
  };

  return (
    <div className="flex w-full h-full bg-gradient-to-r from-blue-100 to-gray-200">
        {/* Left Section: Logo */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="rounded-full w-[400px] h-[400px] flex items-center justify-center shadow-lg">
              <img src={logo} alt="Logo" className="object-contain" />
          </div>
        </div>

      {/* Right Section: Login Form */}
        <div className="w-1/2 py-[17px] px-24 flex items-center justify-center">
            <div className="w-full py-10 px-[60px] items-center justify-center  bg-white rounded-xl shadow-xl">
              <h1 className="text-[32pt] font-medium text-black mb-1 text-center">Welcome back!</h1> {/* Heading for login */}
              <p className="text-[12pt] text-black mb-14 text text-center">
                Enter your Credentials to access your account {/* Description text */}
              </p>
              <form onSubmit={handleSubmit}> {/* Form for user login */}
                {/* Email Input */}
                <div className="mb-7">
                  <label
                    htmlFor="email"
                    className="block text-[14pt] font-medium text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state on change
                    placeholder="Enter your email"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
  
                {/* Password Input */}
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block text-[14pt] font-medium text-black"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state on change
                    placeholder="Enter your password"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                {/* Display error message if there is an error */}
                <p className='w-full h-[24px] px-2 flex items-center text-[11pt] text-red-600 font-semibold mb-2'>{error}</p>
  
                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-[14pt] text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                >
                  Login
                </button>
              </form>
  
              {/* -OR- Divider */}
              <div className="flex items-center my-8">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-sm text-gray-500">OR</span>
                <hr className="flex-grow border-gray-300" />
              </div>
  
              {/* Google Sign-In Button */}
              <button className="w-full border border-gray-300 py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-300">
                <img
                  src={Google}
                  alt="Google logo"
                  className="w-6 h-6 mr-2"
                />
                Sign up with Google
              </button>
  
              {/* Link to Sign-Up page */}
              <p className="mt-6 text-sm text-gray-600 text-center">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Sign Up
                </a>
              </p>
            </div>
  
        </div>
    </div>
  )
}

export default Login;