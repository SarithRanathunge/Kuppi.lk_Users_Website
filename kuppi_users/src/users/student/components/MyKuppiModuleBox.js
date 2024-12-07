import React from 'react'; // Import React
import Rate from './RateSection'; // Import the Rate component for handling star ratings

/**
 * MyKuppiModuleBox Component
 * A card component to display a module with an image, headline, progress bar, and rating system.
 * @param {string} mainImage - URL for the module's main image
 * @param {string} headline - The headline/title of the module
 * @param {number} completeRate - Completion percentage of the module
 */
const MyKuppiModuleBox = ({ mainImage, headline, completeRate }) => {
  
  /**
   * handleRate Function
   * Callback function triggered when a user selects a rating.
   * @param {number} rate - The selected star rating
   */
  const handleRate = (rate) => {
    console.log(`You rated: ${rate}`); // Logs the selected rating in the console
  };

  return (
    // Main container for the module box
    <div className='w-[380px] h-auto flex flex-col gap-3 p-5 bg-white rounded-xl hover:shadow-lg mx-7'>
      
      {/* Main Image */}
      <img
        src={mainImage} // Image source passed as a prop
        alt="Main-Image" // Alternate text for accessibility
        className="w-full h-56 object-cover rounded-lg bg-gray-400" // Style the image
      />

      {/* Headline or Title */}
      <p className="text-left font-semibold text-[18pt]">
        {/* Display the headline, truncate if it's too long */}
        {headline.length >= 27 ? headline.slice(0, 25) + "..." : headline}
      </p>

      {/* Progress Bar Section */}
      <div className="mt-2">
        <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
          {/* Dynamically set the width of the filled portion based on completeRate */}
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${completeRate}%` }} // Proper interpolation for dynamic styling
          ></div>
        </div>
      </div>

      {/* Completion and Rating Section */}
      <div className='w-full h-auto flex flex-row justify-between'>
        {/* Display completion percentage */}
        <span className='text-sm text-gray-600'>{completeRate}% complete</span>
        
        {/* Rating Section */}
        <div className='flex flex-col gap-1'>
          <div className='flex flex-row gap-[1.5px] justify-center cursor-pointer'>
            {/* Render the Rate component and pass a callback to handle user rating */}
            <Rate maxStars={5} onRate={handleRate} />
          </div>
          {/* Label for the rating section */}
          <span>Leave a rating</span>
        </div>
      </div>
    </div>
  );
};

export default MyKuppiModuleBox; // Export the component for use in other parts of the application