import React, { useContext } from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

const ModulePayment = () => {
    const navigate = useNavigate();
    const { university} =useContext(AuthContext)
    const { module} =useContext(AuthContext)
    const { moduleKuppi} =useContext(AuthContext)

  return (
    <div className="w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative p-16 gap-5">
        <div
        className="absolute top-6 left-6"
        onClick={() => {
          navigate("/student/module_select_and_search");
        }}
      >
        <IoIosArrowDropleftCircle className="text-[40px] text-blue-500 cursor-pointer" />
      </div>

      <div className="w-full h-auto flex flex-col bg-white rounded-lg py-8 px-12 gap-6">
        <div className='flex flex-col items-center justify-center'>
          <span className="text-[24pt] font-semibold">Payment For kuppi</span>
        </div>
        <p className='font-normal text-[14pt]'>University: <span className='font-medium text-[14pt]'>{university}</span></p>
        <p className='font-normal text-[14pt]'>Module: <span className='font-medium text-[14pt]'>{module}</span></p>
        <p className='font-normal text-[14pt]'>Kuppi: <span className='font-medium text-[14pt]'>{moduleKuppi}</span></p>
        <button className='w-full h-auto text-[16pt] font-medium rounded-lg bg-blue-500 text-white py-6 hover:bg-blue-600'
         onClick={()=> navigate('/student/mykuppi')}
        >
            Complete Checkout
        </button>
      </div>
    </div>
  )
}

export default ModulePayment