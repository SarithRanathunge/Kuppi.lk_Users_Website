import React from 'react'
import Image from '../../../assets/tutor-hom-page-image.jpg'
import Footer from '../../../common-components/Footer'

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center">

      <header className="bg-green-200 w-full h-56 flex flex-col justify-center items-center">
        <img src={Image} alt="tutor-home-page-image" className=" w-full h-full object-cover"/>
        <div className="flex flex-col p-4 px-8 bg-black bg-opacity-50 rounded-lg item-center justify-center absolute">
            <h1 className="text-5xl font-semibold text-center text-white mb-2">
              Welcome Tharun Perera
            </h1>
            <p className="text-xl text-center text-white max-w-2xl mt-2">
            You are computer science student at NIBM
            </p>
        </div>
      </header>

      <div className='bg-gradient-to-b from-blue-200 to-gray-200'></div>

      <Footer/>

    </div>
  )
}

export default Home