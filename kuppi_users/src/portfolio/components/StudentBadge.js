import React from 'react';

const StudentBadge = ({ image, studentName, university, description }) => {
  return (
    // Main container for the student badge
    <div className='w-[250px] h-[350px] flex flex-col items-center px-6 py-12 gap-5 rounded-lg bg-gray-100 hover:shadow-lg cursor-pointer'>
        
        {/* Student image section */}
        <img src={image} alt="Student" className='w-20 h-20 rounded-full bg-gray-200 object-contain'/>
        
        {/* Student name and university */}
        <div className='flex flex-col gap-[1px] items-center'>
            {/* Student name */}
            <span className='text-[14pt] font-medium'>{studentName}</span>
            {/* Student's university with green text */}
            <span className='font-normal text-[10pt] text-green-500'>{university}</span>
        </div>
        
        {/* Student description */}
        <p className='w-full text-center text-[12pt] font-light'>
            {/* If the description is longer than 81 characters, truncate and add '...' */}
            {description.length >= 81 ? description.slice(0, 78) + '...' : description}
        </p>
    </div>
  );
}

export default StudentBadge;