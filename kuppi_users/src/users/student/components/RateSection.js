import React, { useState } from 'react'; // Import React and useState for state management
import { FaStar } from 'react-icons/fa'; // Import the star icon from react-icons

// Rating Component
const RateSection = ({ maxStars = 5, onRate }) => {
  // State to store the current rating value
  const [rating, setRating] = useState(0);

  // State to store the currently hovered star (for hover effect)
  const [hover, setHover] = useState(null);

  // Function to handle when a star is clicked
  const handleRating = (rate) => {
    setRating(rate); // Update the rating state
    if (onRate) onRate(rate); // Call the parent-provided callback with the rating value
  };

  return (
    <div className="flex space-x-1"> {/* Container for stars with spacing */}
      {[...Array(maxStars)].map((_, index) => { // Create an array for the number of stars and map over it
        const starValue = index + 1; // Star value starts from 1
        return (
          <FaStar
            key={index} // Unique key for each star
            size={16} // Set the size of the star icon
            className={`cursor-pointer transition-all ${
              starValue <= (hover || rating) // Check if the star is hovered or rated
                ? 'text-yellow-500' // Apply yellow color for active stars
                : 'text-gray-400' // Apply gray color for inactive stars
            }`}
            onClick={() => handleRating(starValue)} // Set rating when star is clicked
            onMouseEnter={() => setHover(starValue)} // Set hover state on mouse enter
            onMouseLeave={() => setHover(null)} // Reset hover state on mouse leave
          />
        );
      })}
    </div>
  );
};

export default RateSection; // Export the Rating component
