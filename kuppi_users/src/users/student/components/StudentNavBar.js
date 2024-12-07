import React, {useState, useEffect, useContext} from 'react';
import logo from "../../../assets/Kuppi.lk_logo_03.png";
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import {AuthContext} from '../../../context/AuthContext';
import user from '../../../assets/user.jpg'

const StudentNavBar = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
      setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Searching for:', searchTerm);
  };

  const [login, setLogin] = useState(false);

    useEffect(() => {
        check();
    }, []);

    const check = () => {
        const tutordata = localStorage.getItem('tutor-role');
        if (tutordata === 'approved') {
            setLogin(true);
        }else{
          setLogin(false);
        }
    };

    const switchToTutor =() => {
      if(login) {
        navigate('/tutor');
      }else{
        navigate('/student/login');
      }
    }

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartDetails, newCartDetails] = useState(false);
    const [favouriteDetails, newFavouriteDetails] = useState(false);
    const [notificationDetails, newNotificationDetails] = useState(false);
    const [setName, newSetName] = useState('');

    // Toggle cart visibility
    const toggleCart = () => {
      setIsCartOpen(!isCartOpen)
      newSetName('Your Cart')
      newCartDetails(true)
    };

    const toggleNotification = () =>{
      setIsCartOpen(!isCartOpen);
      newSetName('Notifications')
      newNotificationDetails(true)
    }

    const toggleFavourite = () =>{
      setIsCartOpen(!isCartOpen);
      newSetName('Favourites')
      newFavouriteDetails(true)
    }
  
    // Close cart when clicking outside
    const closeCart = () => {
      setIsCartOpen(false);
      newCartDetails(false)
      newFavouriteDetails(false)
      newNotificationDetails(false)
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu dropdown
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    // Close the menu when clicking outside
    const closeMenu = (e) => {
      if (e.target.closest("#profile-menu") === null) {
        setIsMenuOpen(false);
      }
    };

    const {logoutUser}=useContext(AuthContext);
    const {logoutTutor}=useContext(AuthContext);

    const studentLogout = ()=>{
      logoutUser();
      logoutTutor();
      navigate('/');
    }

  return (
    <div className='mx-auto flex items-center justify-center gap-16 py-2'>

      {/* Logo Section  */}
      <div className="flex items-center cursor-pointer" onClick={()=>{navigate("/home")}}>
        <img src={logo} alt="Logo" className="h-auto w-32 object-contain" />
      </div>

      {/* search bar section  */}
      <div className=" p-2 rounded-md">
        <form onSubmit={handleSubmit} className="w-[400px] relative">
            <input
                type="text"
                placeholder="Find Your University"
                value={searchTerm}
                onChange={handleChange}
                className="w-full text-[16px] p-3 border-2 bg-whit border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                <IoSearch className="h-6 w-6 text-gray-400"/>
            </button>
        </form>
      </div>

      {/* navigation section to another section */}
      <Link to="/student/Home" className="text-[16px] font-medium text-gray-900">
        Home
      </Link>
      <Link to="/student/mykuppi" className="text-[16px] font-medium text-gray-900">
        My Kuppi
      </Link>
      <Link to="/contact" className="text-[16px] font-medium text-gray-900">
        Contact Us
      </Link>
      {login ? <Link to="/tutor/home" className="text-[16px] font-medium text-gray-900">Tutor</Link> : <Link to="/Student/login" className="text-[16px] font-medium text-gray-900">Become a Tutor</Link>}

      {/* login and create account button section  */}
      <div className="flex justify-center items-center gap-8">
        <div 
          className="relative cursor-pointer"
          onClick={toggleCart}
        >
          <span className="absolute top-[-5px] right-[-5px] bg-green-500 text-white text-xs rounded-full px-1">
            1
          </span>
          <span className="text-[20pt]"><BsCart4 color='black' /></span>
        </div>
        <div className='cursor-pointer' onClick={toggleFavourite}>
            <span className="text-[20pt]"><MdFavoriteBorder color='black'/></span>
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

      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeCart}
        ></div>
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-20 transform transition-transform ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
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
            {/* Example Cart Items */}
            {cartDetails &&
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
            }
            {favouriteDetails && 
            <>
            <div>
              <p className="font-semibold">Favourite Items</p>
            </div>
            </>
            }
            {notificationDetails && 
            <>
            <div>
              <p className="font-semibold">Favourite Items</p>
            </div>
            </>
            }
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={closeMenu}
        ></div>
      )}

      {/* Dropdown Menu */}
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
            <button className="w-full text-left text-gray-700 hover:bg-gray-100 py-2 px-4 rounded">
              Your Kuppi
            </button>
            <button className="w-full text-left text-gray-700 hover:bg-gray-100 py-2 px-4 rounded"
             onClick={switchToTutor}
            >
              Switch to Tutor
            </button>
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

export default StudentNavBar;
