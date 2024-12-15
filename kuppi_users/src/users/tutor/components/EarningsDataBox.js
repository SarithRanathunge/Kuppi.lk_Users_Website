import React from 'react'; // Importing React library

// Component to display earnings data for a specific module
const EarningsDataBox = ({ moduleImage, module, purchased, price }) => {
  return (
    <div className='w-full h-full flex flex-row rounded-lg shadow-lg p-6 bg-white gap-5'>
      {/* Display the module image */}
      <img 
        src={moduleImage} 
        alt="module-image" 
        className='w-[200px] h-[90px] object-cover rounded-lg' 
      />
      
      {/* Container for module details */}
      <div className='w-full h-full flex flex-row justify-center items-center'>

        {/* Display the module name */}
        <span className='w-6/12 text-[16pt] font-semibold'>{module}</span>
        
        {/* Display the number of times the module was purchased */}
        <span className='w-4/12 text-[14pt] text-gray-400 font-medium'>
          Purchased: {purchased}
        </span>
        
        {/* Display the price of the module */}
        <span className='w-2/12 text-[14pt] text-right text-blue-500 font-medium'>
          Rs.{price}
        </span>
      </div>
    </div>
  );
};

export default EarningsDataBox; // Exporting the component for reuse