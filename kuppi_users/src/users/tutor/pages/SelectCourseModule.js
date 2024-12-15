import React, { useContext } from 'react';
import { IoIosArrowDropleftCircle } from 'react-icons/io'; // Import back arrow icon
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import CourseModuleBox from '../components/CourseModuleBox'; // Import custom component for displaying course modules
import { AuthContext } from '../../../context/AuthContext'; // Import context to access shared state

const SelectCourseModule = () => {
  const navigate = useNavigate(); // Hook to handle navigation between routes
  const { year, degree } = useContext(AuthContext); // Destructure `year` and `degree` from AuthContext

  // Data array containing module information
  const moduleArray = [
    { module: 'Introduction to Computer Science' },
    { module: 'Mathematics for Computing' },
    { module: 'Programming Fundamentals' },
    { module: 'Computer Technology' },
    { module: 'Object-Oriented Programming' },
    { module: 'Database Management Systems' },
    { module: 'Computer Architecture and Networks' },
  ];

  // Function to calculate the correct suffix for the year (e.g., "1st", "2nd", "3rd")
  const getYearSuffix = (year) => {
    const suffixes = ['th', 'st', 'nd', 'rd']; // Array of suffixes
    const value = year % 100; // Get the last two digits of the year
    return suffixes[value] || suffixes[0]; // Return corresponding suffix or default to 'th'
  };

  return (
    // Main container with gradient background and padding, styled using Tailwind CSS
    <div className='w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative px-[100px] pt-[18px]'>

      {/* Back button to navigate to the year selection page */}
      <div
        className='absolute top-6 left-6 cursor-pointer' 
        onClick={() => navigate('/tutor/select_year')} // Navigate back to year selection
        title='Go Back' // Accessibility title for screen readers
        aria-label='Go Back' // Another accessibility enhancement
      >
        <IoIosArrowDropleftCircle className='text-[40px] text-blue-500' />
      </div>

      {/* Header showing the selected degree and year */}
      <div>
        <span className='text-[24pt] font-semibold'>
          {degree} {year}{getYearSuffix(year)} Year Course Module
        </span>
      </div>

      {/* List of course modules */}
      <div className='w-full h-full flex flex-col gap-5 py-8 px-14'>
        {moduleArray.map((data, index) => (
          // Render a `CourseModuleBox` for each module in the array
          <CourseModuleBox
            key={index} // Unique key for each item to help React optimize rendering
            number={index} // Pass the index as a prop
            module={data.module} // Pass the module name as a prop
          />
        ))}
      </div>
    </div>
  );
};

export default SelectCourseModule;