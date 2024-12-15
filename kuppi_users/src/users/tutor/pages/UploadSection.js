import React, { useState, useContext } from 'react'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import MainImage from '../../../assets/tutor-hom-page-image.jpg'
import UploadedSessionBox from '../components/UploadedSessionBox'
import KuppiImage from '../../../assets/searched-module-main-image.jpg'
import { FaCheckCircle } from "react-icons/fa"
import { AuthContext } from '../../../context/AuthContext'

const UploadSection = () => {
    // Initialize navigation hook and context values
    const navigate = useNavigate()
    const [isPopupVisible, setPopupVisible] = useState(false); // State to control visibility of the popup
    const { kuppiModule } = useContext(AuthContext)

    // Function to toggle the visibility of the popup
    const togglePopup = () => {
      setPopupVisible(!isPopupVisible);
    };

    // Sample data for uploaded sessions
    const uploadArray = [
        { kuppiImage: KuppiImage, kuppiName: 'UI / UX Desing Fundermendals' },
        { kuppiImage: KuppiImage, kuppiName: 'UI / UX Desing Fundermendals' },
        { kuppiImage: KuppiImage, kuppiName: 'UI / UX Desing Fundermendals' },
        { kuppiImage: KuppiImage, kuppiName: 'UI / UX Desing Fundermendals' },
        { kuppiImage: KuppiImage, kuppiName: 'UI / UX Desing Fundermendals' },
        { kuppiImage: KuppiImage, kuppiName: 'UI / UX Desing Fundermendals' },
    ]

  return (
    <div className='w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative px-[100px] pt-[18px] gap-5'>
        {/* Back arrow button to navigate to select faculty page */}
        <div className='absolute top-6 left-6 cursor-pointer' onClick={()=>{navigate('/tutor/your_kuppi')}}>
          <IoIosArrowDropleftCircle className='text-[40px] text-blue-500' />
        </div>

        <div>
          <span className='text-[24pt] font-semibold'>Upload Section</span> {/* Section title */}
        </div>

        {/* Container for the main content */}
        <div className='w-full h-full flex flex-col bg-white rounded-lg gap-5 p-5'>
            {/* Main image section with faculty and year information */}
            <div className='w-full h-[200px] relative'>
                <img src={MainImage} alt="main-image" className='w-full h-full object-cover rounded-lg' />
                <div className='w-fit h-fit flex flex-col absolute top-12 left-16 p-4 bg-white bg-opacity-50 rounded-lg'>
                    <span className='text-[24pt] font-semibold '>{kuppiModule}</span>
                    <span className='text-[16pt] font-semibold'></span>
                </div>
            </div>
            
            {/* Buttons to upload session and publish */}
            <div className='w-full h-auto flex flex-row justify-between py-2'>
                <button onClick={()=>{ navigate('/tutor/upload_kuppi')}} className='w-[500px] h-auto text-center py-4 bg-blue-500 text-[14pt] font-medium text-white'>
                    Upload Kuppi Session {/* Button text */}
                </button>
                <button onClick={togglePopup} className='w-[120px] h-auto text-center py-3 bg-green-400 rounded-lg text-white font-medium'>
                    Publish {/* Button text */}
                </button>
            </div>

            {/* Uploaded session box section */}
            <div className='w-full h-[230px] flex flex-col border-t-[3px] border-t-gray-300 gap-4 p-4 overflow-y-auto'
                style={{ maxHeight: '330px' }}>
                {
                    // Loop through the uploadArray and display each uploaded session
                    uploadArray.map((data, index) => (
                        <UploadedSessionBox key={index} index={index} kuppiImage={data.kuppiImage} kuppiName={data.kuppiName} />
                    ))
                }
            </div>
        </div>

        {/* Popup message */}
        {isPopupVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white w-[600px] p-6 rounded-lg shadow-lg flex flex-col gap-8 justify-center items-center">
                    {/* Pop-up close button */}
                    <div className="w-full flex justify-end items-center">
                      <button
                        onClick={togglePopup}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </div>
                    {/* Check circle icon */}
                    <FaCheckCircle className='text-[96pt] text-green-400' />
                    <div className='w-full h-full flex flex-col justify-center gap-1'>
                        {/* Success message */}
                        <span className='text-[18pt] text-green-400 font-medium text-center'>Kuppi Upload Request Send Successfully</span>
                        <span className='text-[12pt] text-center font-normal text-gray-400'>
                            Please wait 48 hours for Published your kuppl in the website
                        </span>
                    </div>
                    {/* Button to go back to home page */}
                    <button onClick={()=>{ navigate('/tutor/home')}} className='w-[200px] py-3 text-[12pt] font-medium text-white bg-green-400 rounded-lg hover:bg-green-500'>
                        Okay
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default UploadSection