import React from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import ModuleBox from '../components/ModuleBox';

const CourseModules = () => {
    const navigate = useNavigate();

    const moduleArray = [
        { module: 'UI/UX Design Fundamental'},
        {module: 'Mathematics for Computing'},
        {module: 'Programming Fundamentals'},
        {module: 'Electronics and Computer Architecture'},
        {module: 'Enterprise Application Development-01'},
        {module: 'Developing Modern Web'},
        {module: 'Developing Modern Web'},
        {module: 'Developing Modern Web'},
        {module: 'Developing Modern Web'},
        {module: 'Developing Modern Web'}
    ]
    
  return (
    <div className='w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative p-16'>
        <div className='absolute top-6 left-6'
         onClick={()=>{navigate('/student/home')}}
        >
           <IoIosArrowDropleftCircle className='text-[40px] text-blue-500' />
        </div>
        <div>
            <span className='text-[24pt] font-semibold'>Diploma in Software Engineering 1 Year Course Modules</span>
        </div>
        <div className='w-full h-full flex flex-col gap-5 py-8 px-14'>
            {
                moduleArray.map((data,index)=>(
                    <ModuleBox key={index} number={index} module={data.module}/>
                ))
            }
        </div>
    </div>
  )
}

export default CourseModules