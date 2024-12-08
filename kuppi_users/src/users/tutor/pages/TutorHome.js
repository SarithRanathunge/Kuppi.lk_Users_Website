import React from 'react'
import Image from '../../../assets/tutor-hom-page-image.jpg' // Header image
import Footer from '../../../common-components/Footer' // Footer component
import Laptop from '../../../assets/laptop_image.png' // Laptop image
import Monitor from '../../../assets/monitor_image.png' // Monitor image
import SocialReach from '../../../assets/social_reach.png' // Social reach image
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center">

      {/* Header Section */}
      <header className="w-full h-56 flex flex-col justify-center items-center">
        <img src={Image} alt="tutor-home-page-image" className="w-full h-full object-cover"/> 
        {/* Overlay for header text */}
        <div className="flex flex-col p-4 px-8 bg-black bg-opacity-50 rounded-lg item-center justify-center absolute">
            <h1 className="text-5xl font-semibold text-center text-white mb-2">
              Welcome Tharun Perera
            </h1>
            <p className="text-xl text-center text-white max-w-2xl mt-2">
            You are a computer science student at NIBM
            </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="w-full flex items-center justify-center bg-gradient-to-b from-blue-200 to-gray-200">
        <div className="w-full flex flex-col px-48 pt-14 gap-8">

          {/* First Card: Jump to Course Creation */}
          <div className="flex items-center justify-between bg-white px-10 py-8 rounded-lg shadow-lg">
            <div>
              <h2 className="text-2xl font-semibold">Jump to Course Creation</h2>
              <p className="text-gray-600">Expand your horizons with learning</p>
            </div>
            {/* Button to create Kuppi */}
            <button className="w-auto h-14 bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 rounded"
            onClick={()=>{navigate('/tutor/select_year')}}
            >
              Create Your Kuppi
            </button>
          </div>
  
          {/* Second Card: Kuppi Creating Steps Intro */}
          <div className="flex items-center justify-between bg-white px-20 py-8 rounded-lg shadow-lg">
            <img src={Laptop} alt="laptop_image" className='w-24 h-auto'/>
            <h2 className="text-2xl font-semibold">Kuppi Creating Steps Intro</h2>
          </div>
  
          {/* Two Section Cards: Getting Started with Video */}
          <div className="flex flex-row gap-16">

            {/* First Section Card */}
            <div className="w-1/2 flex flex-row gap-3 items-center bg-white p-6 rounded-lg shadow-lg">
              <img src={Monitor} alt="monitor_image" className='w-48 h-auto'/>
              <div className='flex flex-col gap-2'>
                <h3 className="text-xl font-semibold">Get Started with Video</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   
                </p>
                {/* Link to get started */}
                <a href='/' className="text-blue-500 font-semibold underline">
                  Get Started
                </a>
              </div>
            </div>

            {/* Second Section Card */}
            <div className="w-1/2 flex flex-row gap-3 items-center bg-white p-6 rounded-lg shadow-lg">
              <img src={SocialReach} alt="social_reach_image" className='w-48 h-auto'/>
              <div className='flex flex-col gap-2'>
                <h3 className="text-xl font-semibold">Get Started with Video</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   
                </p>
                {/* Link to get started */}
                <a href='/' className="text-blue-500 font-semibold underline">
                  Get Started
                </a>
              </div>
            </div>

          </div>  
        </div>
      </div>

      {/* Footer Component */}
      <Footer/>

    </div>
  )
}

export default Home;