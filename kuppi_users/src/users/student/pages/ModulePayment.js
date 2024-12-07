import React, { useContext } from 'react'  // Importing React and useContext hook
import { IoIosArrowDropleftCircle } from "react-icons/io";  // Importing back arrow icon from react-icons
import { useNavigate } from 'react-router-dom';  // Importing useNavigate hook for navigation
import { AuthContext } from '../../../context/AuthContext';  // Importing AuthContext to access context values

const ModulePayment = () => {
    const navigate = useNavigate();  // Initialize the navigate function for routing

    // Using useContext to access university, module, and moduleKuppi values from the AuthContext
    const { university } = useContext(AuthContext);
    const { module } = useContext(AuthContext);
    const { moduleKuppi } = useContext(AuthContext);

  return (
    <div className="w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative p-16 gap-5">
      
      {/* Back button to navigate to the module selection page */}
      <div
        className="absolute top-6 left-6"
        onClick={() => {
          navigate("/student/module_select_and_search");  // Navigate to the previous page
        }}
      >
        <IoIosArrowDropleftCircle className="text-[40px] text-blue-500 cursor-pointer" />  {/* Back icon */}
      </div>

      {/* Payment details container */}
      <div className="w-full h-auto flex flex-col bg-white rounded-lg py-8 px-12 gap-6">
        
        {/* Title for the payment page */}
        <div className='flex flex-col items-center justify-center'>
          <span className="text-[24pt] font-semibold">Payment For kuppi</span>
        </div>

        {/* Displaying the university, module, and kuppi values */}
        <p className='font-normal text-[14pt]'>University: <span className='font-medium text-[14pt]'>{university}</span></p>
        <p className='font-normal text-[14pt]'>Module: <span className='font-medium text-[14pt]'>{module}</span></p>
        <p className='font-normal text-[14pt]'>Kuppi: <span className='font-medium text-[14pt]'>{moduleKuppi}</span></p>

        {/* Button to complete the checkout process */}
        <button 
          className='w-full h-auto text-[16pt] font-medium rounded-lg bg-blue-500 text-white py-6 hover:bg-blue-600'
          onClick={() => navigate('/student/mykuppi')}  // Navigate to the user's kuppi page on click
        >
            Complete Checkout
        </button>
      </div>
    </div>
  )
}

export default ModulePayment;  // Exporting the ModulePayment component for use in other parts of the application