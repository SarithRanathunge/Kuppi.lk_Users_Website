import React, { useState, useContext } from 'react';
import logo from "../../../assets/Kuppi.lk_logo_03.png"; // Logo image
import { useNavigate } from 'react-router-dom'; // Hook to navigate between pages
import { RiCloseCircleFill } from "react-icons/ri"; // Close icon for cart and menu
import { MdFavoriteBorder } from "react-icons/md"; // Favourite icon
import { IoMdNotificationsOutline } from "react-icons/io"; // Notifications icon
import { Link } from 'react-router-dom'; // Link for navigation
import { AuthContext } from '../../../context/AuthContext'; // Auth context for user authentication
import user from '../../../assets/user.jpg'; // Default user profile image

const TutorNavBar = () => {
  const navigate = useNavigate(); // To navigate between pages
  
  // State hooks to manage visibility of cart, notifications, and favourites
  const [isOpen, setIsOpen] = useState(false);
  const [cartDetails, newCartDetails] = useState(false);
  const [favouriteDetails, newFavouriteDetails] = useState(false);
  const [notificationDetails, newNotificationDetails] = useState(false);
  const [setName, newSetName] = useState('');

  // Toggle visibility of the cart
  const toggleCart = () => {
    setIsOpen(!isOpen);
    newSetName('Your Cart');
    newCartDetails(true);
  };

  // Toggle visibility of the notifications
  const toggleNotification = () => {
    setIsOpen(!isOpen);
    newSetName('Notifications');
    newNotificationDetails(true);
  };

  // Toggle visibility of the favourites
  const toggleFavourite = () => {
    setIsOpen(!isOpen);
    newSetName('Favourites');
    newFavouriteDetails(true);
  };
  
  // Close cart and other details on clicking outside the drawer
  const closeCart = () => {
    setIsOpen(false);
    newCartDetails(false);
    newFavouriteDetails(false);
    newNotificationDetails(false);
  };

  // State hook for managing the dropdown menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle visibility of the dropdown menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown menu when clicking outside of it
  const closeMenu = (e) => {
    if (e.target.closest("#profile-menu") === null) {
      setIsMenuOpen(false);
    }
  };

  // Logout function using context
  const { logoutTutor } = useContext(AuthContext);

  const studentLogout = () => {
    logoutTutor();
    navigate('/');
  };

  // Navigate to the student home page
  const switchToStudent = () => {
    navigate('/student/home');
  };

  return (
    <div className='mx-auto flex items-center justify-between py-2 px-32'>
      {/* Logo Section */}
      <div className="flex items-center cursor-pointer" onClick={() => { navigate("/tutor/home"); }}>
        <img src={logo} alt="Logo" className="h-auto w-32 object-contain" />
      </div>

      {/* Navigation Links */}
      <div className='w-auto flex gap-32'>
        <Link to="/contact" className="text-[16px] font-medium text-gray-900">
          My Learning
        </Link>
        <Link to="/contact" className="text-[16px] font-medium text-gray-900">
          Contact Us
        </Link>
        <Link to="/student/home" className="text-[16px] font-medium text-gray-900">
          Student
        </Link>
      </div>

      {/* Action Buttons (Favourite, Notifications, Profile) */}
      <div className="flex justify-center items-center gap-8">
        <div className='cursor-pointer' onClick={toggleFavourite}>
          <span className="text-[20pt]"><MdFavoriteBorder color='black' /></span>
        </div>
        <div className='cursor-pointer' onClick={toggleNotification}>
          <span className="text-[22pt]"><IoMdNotificationsOutline color='black' /></span>
        </div>
        <div className="w-9 h-9 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold cursor-pointer"
          onClick={toggleMenu}
        >
          TP
        </div>
      </div>

      {/* Overlay when cart, notifications or favourites are open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeCart}
        ></div>
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-20 transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className='w-full flex flex-row items-start justify-between'>
            <h2 className="text-xl font-bold mb-4">{setName}</h2>
            <button
              onClick={toggleCart}
              className="text-gray-500 font-bold text-2xl"
            >
              <RiCloseCircleFill color="black" />
            </button>
          </div>
          <div className="space-y-4 px-2 pt-4">
            {/* Cart details */}
            {cartDetails && (
              <>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Item 1</p>
                    <p className="text-gray-500 text-sm">Price: $10</p>
                  </div>
                  <span className="text-gray-600">x1</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Item 2</p>
                    <p className="text-gray-500 text-sm">Price: $20</p>
                  </div>
                  <span className="text-gray-600">x2</span>
                </div>
                <div className="border-t mt-4 pt-4 px-2">
                  <p className="font-bold">Total: $50</p>
                </div>
              </>
            )}
            {/* Favourite details */}
            {favouriteDetails && (
              <>
                <div>
                  <p className="font-semibold">Favourite Items</p>
                </div>
              </>
            )}
            {/* Notification details */}
            {notificationDetails && (
              <>
                <div>
                  <p className="font-semibold">Favourite Items</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={closeMenu}
        ></div>
      )}

      {/* Profile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-[85.5px] right-2 bg-white shadow-lg w-72 z-50 translate-x-2"
          id="profile-menu-dropdown"
        >
          <div className="flex flex-col items-center border-b py-4">
            <img
              src={user}
              alt="Profile"
              className="w-20 h-20 bg-gray-200 rounded-full object-contain"
            />
            <h3 className="text-xl font-bold text-blue-600">Tharun Perera</h3>
            <p className="text-sm text-gray-500">tharunperera@gmail.com</p>
          </div>
          <div className="p-4 space-y-2">
            <button className="w-full text-left text-gray-700 hover:bg-gray-100 py-2 px-4 rounded">
              Profile
            </button>
            <button className="w-full text-left text-gray-700 hover:bg-gray-100 py-2 px-4 rounded"
            onClick={()=>{ navigate('/tutor/your_kuppi') }}
            >
              Your Kuppi
            </button>
            <button className="w-full text-left text-gray-700 hover:bg-gray-100 py-2 px-4 rounded"
              onClick={switchToStudent}
            >
              Switch to Student
            </button>
            <button className="w-full text-left text-gray-700 hover:bg-gray-100 py-2 px-4 rounded"
            onClick={()=>{navigate('/tutor/earnings')}}
            >
              Earnings
            </button>
            <button className="w-full text-left text-gray-700 hover:bg-gray-100 py-2 px-4 rounded"
             onClick={()=>{navigate('/tutor/withdrawal')}}
            >
              Withdrawal
            </button>
          </div>
          <div className="p-4 border-t">
            <button className="w-full text-left text-gray-700 hover:bg-gray-100 py-2 px-4 rounded">
              Notification
            </button>
          </div>
          <div className="p-4 border-t">
            <button className="w-full text-left text-red-600 hover:bg-gray-100 py-2 px-4 rounded font-semibold"
              onClick={studentLogout}
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorNavBar;