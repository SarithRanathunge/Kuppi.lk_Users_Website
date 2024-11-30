import React from 'react'
import logo from '../../assets/Kuppi.lk_logo_03.png'
import HomeImage from '../../assets/home_page_image.png';
import Footer from '../../common-components/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToRegister = () =>{
    navigate('/create');
  }
  return (
    <div>
        <div className='w-full h-full overflow-hidden relative flex py-16 flex-row gap-40 justify-center bg-gradient-to-r from-[#f8fcff] via-[#dbeeff] to-[#f8fcff]'>
        <div className='flex flex-col gap-11'>
          <span className='text-[52px] font-bold'>Welcome to</span>
          <img src={logo} alt="Logo" className="h-auto w-[400px] object-contain relative left-16"/>
          <button className=" w-[200px] mt-24 py-7 text-[18px] bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
           onClick={goToRegister}
          >
            Register Now
          </button>
        </div>
        <img src={HomeImage} alt="Home_Image" className="h-auto w-[453.5px] object-contain" />
        <div className='w-[350px] h-[350px] rounded-full absolute bg-blue-300 top-[-150px] right-[-150px] '></div>
        <div className='w-20 h-20 rounded-full absolute bg-blue-300 top-[500px] right-[300px]'></div>
        <div className='w-10 h-10 rounded-full absolute bg-blue-300 top-[20px] right-[850px]'></div>
        <div className='w-[500px] h-[500px] rounded-full absolute bg-blue-300 top-[500px] left-[-300px]'></div>
        <div className='w-16 h-16 rounded-full absolute bg-blue-300 top-[165 px] left-36'></div>
        <div className='w-14 h-14 rounded-full absolute bg-blue-300 top-[550px] right-[750px]'></div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home