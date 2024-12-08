import React, { useState } from 'react';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import YearBox from '../components/YearBox';
import { useNavigate } from 'react-router-dom';

const SelectYear = () => {
  const navigate = useNavigate()
  const numOfYears = 4; // Number of years to display

  // Initialize years as an array containing numbers from 1 to numOfYears
  const [years] = useState(Array.from({ length: numOfYears }, (_, i) => i + 1));

  return (
    <div className='w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative px-[100px] pt-[18px]'>
      {/* Back Button */}
      <div className='absolute top-6 left-6' onClick={()=>{navigate('/tutor/home')}}>
        <IoIosArrowDropleftCircle className='text-[40px] text-blue-500' />
      </div>

      {/* Header Text */}
      <div>
        <span className='text-[24pt] font-semibold'>Select Your University Year</span>
      </div>

      {/* Year Selection Section */}
      <div className='w-full h-full flex flex-col gap-4 py-[130px]'>
        <div className='w-full h-full flex flex-wrap gap-9 items-center justify-between'>
          {/* Map over the years array */}
          {years.map((year, index) => (
            <YearBox key={index} num={year} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectYear;