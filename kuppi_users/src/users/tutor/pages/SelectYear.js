import React, { useState } from 'react';
import { IoIosArrowDropleftCircle } from 'react-icons/io'; // Importing back-arrow icon
import YearBox from '../components/YearBox'; // Importing reusable YearBox component
import { useNavigate } from 'react-router-dom'; // Importing hook for navigation between routes

const SelectYear = () => {
  const navigate = useNavigate(); // Hook to handle route navigation
  const numOfYears = 4; // Number of university years to display

  // Initialize an array of years (1 to numOfYears) using useState
  const [years] = useState(Array.from({ length: numOfYears }, (_, i) => i + 1));

  return (
    <div className='w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative px-[100px] pt-[18px]'>
      {/* Back Button */}
      <div 
        className='absolute top-6 left-6 cursor-pointer' 
        onClick={() => { navigate('/tutor/home') }} // Navigate back to the home page
      >
        <IoIosArrowDropleftCircle className='text-[40px] text-blue-500' />
      </div>

      {/* Header Text */}
      <div>
        <span className='text-[24pt] font-semibold'>Select Your University Year</span>
      </div>

      {/* Year Selection Section */}
      <div className='w-full h-full flex flex-col gap-4 py-[130px]'>
        <div className='w-full h-full flex flex-wrap gap-9 items-center justify-between'>
          {/* Map through the years array and render a YearBox for each year */}
          {years.map((year, index) => (
            <YearBox 
              key={index} // Unique key for each YearBox component
              num={year} // Passing the year number as a prop to YearBox
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectYear;