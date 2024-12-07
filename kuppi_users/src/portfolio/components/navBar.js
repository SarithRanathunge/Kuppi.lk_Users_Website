import React, { useState, useEffect } from 'react';
import logo from "../../assets/Kuppi.lk_logo_03.png"; // Logo import
import { useNavigate } from 'react-router-dom'; // For navigation between pages
import { IoSearch } from "react-icons/io5"; // Search icon
import { Link } from 'react-router-dom'; // Link component for routing

const NavBar = () => {
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate
  const [searchTerm, setSearchTerm] = useState(''); // State to track the search term entered by the user

  // Handle the change in the search input field
  const handleChange = (event) => {
      setSearchTerm(event.target.value); // Update searchTerm state as user types
  };

  // Handle form submission when the user presses 'Enter' in the search input
  const handleSubmit = (event) => {
      event.preventDefault(); // Prevent form from refreshing the page
      console.log('Searching for:', searchTerm); // Log the search term (can be replaced with actual search functionality)
  };

  // State to manage login status and account creation status
  const [login, setLogin] = useState(false);
  const [checkAccount, newCheckAccount] = useState(false);

  // useEffect hook runs when the component mounts to check user login status and account creation status
  useEffect(() => {
      check(); // Check if the student is logged in
      checkCreateAccount(); // Check if the user has created an account
  }, []);

  // Function to check if the student is logged in (from local storage)
  const check = () => {
      const studentdata = localStorage.getItem('student-role'); // Retrieve student role from local storage
      if (studentdata === 'approved') {
          setLogin(true); // If approved, set login to true
      } else {
        setLogin(false); // If not approved, set login to false
      }
  };

  // Function to check if the student has created an account (from local storage)
  const checkCreateAccount = () => {
    const studentdata = localStorage.getItem('student-role'); // Retrieve student role from local storage
    if (studentdata === 'approved') {
      newCheckAccount(true); // If approved, set account creation status to true
    } else {
      newCheckAccount(false); // If not approved, set account creation status to false
    }
  };

  return (
    <div className='mx-auto flex items-center justify-center gap-20 py-2'> {/* Centering the navbar items */}

      {/* Logo Section  */}
      <div className="flex items-center cursor-pointer" onClick={() => { navigate("/home") }}>
        {/* When the logo is clicked, navigate to the home page */}
        <img src={logo} alt="Logo" className="h-auto w-32 object-contain" />
      </div>

      {/* Search Bar Section  */}
      <div className="p-2 rounded-md">
        <form onSubmit={handleSubmit} className="w-[400px] relative">
            {/* Search bar for the user to type a search term */}
            <input
                type="text"
                placeholder="Find Your University"
                value={searchTerm}
                onChange={handleChange}
                className="w-full text-[16px] p-3 border-2 bg-whit border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            />
            {/* Search icon button */}
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                <IoSearch className="h-6 w-6 text-gray-400"/>
            </button>
        </form>
      </div>

      {/* Navigation links */}
      <Link to="/contact" className="text-[16px] font-medium text-gray-900">
        Contact Us
      </Link>
      <Link to="/" className="text-[16px] font-medium text-gray-900">
        Home
      </Link>

      {/* Login and Create Account Button Section */}
      <div className="flex gap-4">
        {/* Conditional rendering for the Login button based on whether the student is logged in */}
        {login ? 
          <Link to="/student/home" className="bg-white border text-[16px] border-gray-300 text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-100 hover:border-gray-400">
            Login
          </Link> 
        : 
          <Link to="/login" className="bg-white border text-[16px] border-gray-300 text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-100 hover:border-gray-400">
            Login
          </Link> 
        }

        {/* Conditional rendering for the Create Account button based on whether the account exists */}
        {checkAccount ? 
          <Link to="/student/home" className="bg-blue-500 text-[16px] text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">
            Create free account
          </Link> 
        : 
          <Link to="/create" className="bg-blue-500 text-[16px] text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">
            Create free account
          </Link> 
        }
      </div>
        
    </div>
  );
};

export default NavBar;