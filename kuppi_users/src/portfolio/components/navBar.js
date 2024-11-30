import React, {useState, useEffect} from 'react'
import logo from "../../assets/Kuppi.lk_logo_03.png";
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

const NavBar = () => {
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
  const [checkAccount, newCheckAccount] = useState(false);

  useEffect(() => {
      check();
      checkCreateAccount();
  }, []);

  const check = () => {
      const studentdata = localStorage.getItem('student-role');
      if (studentdata === 'approved') {
          setLogin(true);
      }else{
        setLogin(false);
      }
  };

  const checkCreateAccount = () => {
    const studentdata = localStorage.getItem('student-role');
    if (studentdata === 'approved') {
      newCheckAccount(true);
    }else{
      newCheckAccount(false);
    }
  };


  return (
    <div className='mx-auto flex items-center justify-center gap-20 py-2'>

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
      <Link to="/contact" className="text-[16px] font-medium text-gray-900">
        Contact Us
      </Link>
      <Link to="/" className="text-[16px] font-medium text-gray-900">
        Home
      </Link>

      {/* login and create account button section  */}
      <div className="flex gap-4">
        {login ? 
        <Link to="/student/home" className="bg-white border text-[16px] border-gray-300 text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-100 hover:border-gray-400">Login</Link> 
        : 
        <Link to="/login" className="bg-white border text-[16px] border-gray-300 text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-100 hover:border-gray-400">Login</Link> 
        }

        {checkAccount ? 
        <Link to="/student/home" className="bg-blue-500 text-[16px] text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">Create free account</Link> 
        : 
        <Link to="/create" className="bg-blue-500 text-[16px] text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">Create free account</Link> 
        }
      </div>
        
    </div>
  )
}

export default NavBar

