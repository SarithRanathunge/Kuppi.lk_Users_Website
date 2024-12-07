import React from 'react'  // Importing React library
import { IoIosArrowDropleftCircle } from "react-icons/io";  // Importing an arrow icon from react-icons
import { useNavigate } from 'react-router-dom';  // Importing the useNavigate hook for routing
import ModuleBox from '../components/ModuleBox';  // Importing the ModuleBox component for displaying individual modules

const CourseModules = () => {
    const navigate = useNavigate();  // Initialize the navigate function for routing

    // Array of objects that represent the course modules
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
      {/* Back button to navigate to the home page */}
      <div className='absolute top-6 left-6' onClick={()=>{navigate('/student/home')}}>
        <IoIosArrowDropleftCircle className='text-[40px] text-blue-500' /> {/* Icon for the back button */}
      </div>
      
      {/* Course title section */}
      <div>
        <span className='text-[24pt] font-semibold'>Diploma in Software Engineering 1 Year Course Modules</span>
      </div>

      {/* Container for the course modules */}
      <div className='w-full h-full flex flex-col gap-5 py-8 px-14'>
        {/* Mapping through moduleArray to render ModuleBox for each module */}
        {moduleArray.map((data, index) => (
          <ModuleBox key={index} number={index} module={data.module}/>  // Passing data to ModuleBox component
        ))}
      </div>
    </div>
  )
}

export default CourseModules  // Exporting the CourseModules component for use in other parts of the application