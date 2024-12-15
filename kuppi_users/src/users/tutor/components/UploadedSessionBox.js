import React from 'react'; // Importing React
import { ImBin } from "react-icons/im"; // Importing bin icon for the delete button

// Component to display individual uploaded session details
const UploadedSessionBox = ({ index, kuppiImage, kuppiName }) => {
  return (
    <div className='w-full h-full flex flex-row rounded-lg px-6 py-4 bg-gray-200 gap-5 hover:shadow-lg'>
      
      {/* Section displaying the session index and image */}
      <div className='flex flex-row items-center gap-4'>
        <span className='text-[14pt] font-semibold'>{index + 1}.</span> 
        {/* Display the index (1-based numbering) */}
        
        <img 
          src={kuppiImage} 
          alt="module-image" 
          className='w-[200px] h-[90px] object-cover rounded-lg' 
        />
        {/* Display the session's image */}
      </div>
      
      {/* Section for session name and delete icon */}
      <div className='w-full h-auto flex flex-row items-center justify-between'>
        
        {/* Display the session name */}
        <span className='w-6/12 h-auto text-[16pt] font-semibold'>{kuppiName}</span>
        
        {/* Delete icon */}
        <ImBin 
          className='w-auto text-[14pt] text-red-500 cursor-pointer' 
          onClick={() => {
            console.log(`Delete session: ${kuppiName}`); 
            // Replace with actual delete logic
          }} 
        />
      </div>
    </div>
  );
};

export default UploadedSessionBox; // Exporting the component for reuse