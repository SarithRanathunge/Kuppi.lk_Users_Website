import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigation hook for programmatic navigation
import { AuthContext } from '../../../context/AuthContext'; // Import AuthContext for shared state management

const YearBox = ({ num }) => { 
  const navigate = useNavigate(); // Hook to navigate to different routes
  const { addTutorYear } = useContext(AuthContext); // Access `addTutorYear` function from AuthContext

  // Function to determine the correct suffix for the year (e.g., "1st", "2nd", "3rd", "4th", etc.)
  const getYearSuffix = (year) => {
    const suffixes = ['th', 'st', 'nd', 'rd']; // Define possible suffixes
    const value = year % 100; // Get the last two digits of the year
    return suffixes[value] || suffixes[0]; // Return the corresponding suffix or default to 'th'
  };

  return (
    // Wrapper div for the YearBox, styled with Tailwind CSS
    <div 
      className="w-[300px] h-[300px] flex flex-col justify-center gap-10 items-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
      onClick={() => {
        addTutorYear(num); // Save the selected year in AuthContext
        navigate('/tutor/select_module'); // Navigate to the "select module" page
      }}
    >
      {/* Display the number and its suffix */}
      <div className='flex flex-row font-bold'>
        <span className='h-[100px] flex items-center text-[120pt]'>{num}</span>
        <span className='h-[35px] flex items-center text-[48pt]'>{getYearSuffix(num)}</span>
      </div>

      {/* Display the "Year" label */}
      <span className='h-[45px] flex items-center text-[52pt]'>Year</span>
    </div>
  );
};

export default YearBox;
