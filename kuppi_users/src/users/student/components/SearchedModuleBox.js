import React, { useContext } from "react"; // Import React and useContext hook
import { MdOutlineStarRate } from "react-icons/md"; // Import the outlined star (for empty/half stars) icon
import { MdStarRate } from "react-icons/md"; // Import the filled star icon
import { useNavigate } from "react-router-dom"; // Import useNavigate hook to navigate between pages
import { AuthContext } from "../../../context/AuthContext"; // Import AuthContext to access the context data

const SearchedModuleBox = ({ mainImage, headline, description, rate, numofrated, tutorImage, tutorName, tutorEnrolledYear, price }) => {
  const navigate = useNavigate(); // Initialize navigate for routing
  const { addModuleKuppi } = useContext(AuthContext); // Extract addModuleKuppi from AuthContext to save selected module

  // Function to generate stars based on rating
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate); // Get the number of full stars
    const hasHalfStar = rate % 1 >= 0.5; // Check if there is a half star
    const totalStars = 5; // Total number of stars (for the rating)

    const stars = [];
    // Add full stars to the array
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <MdStarRate key={`full-${i}`} className="text-[13pt] text-yellow-500" />
      );
    }

    // Add a half star if necessary
    if (hasHalfStar) {
      stars.push(
        <MdOutlineStarRate
          key="half"
          className="text-[13pt] text-yellow-500"
        />
      );
    }

    // Add empty stars for the remaining slots
    for (let i = stars.length; i < totalStars; i++) {
      stars.push(
        <MdOutlineStarRate
          key={`empty-${i}`}
          className="text-[13pt] text-gray-300"
        />
      );
    }

    return stars; // Return the array of stars (full, half, and empty)
  };

  return (
    <div
      className="w-[380px] h-auto flex flex-col gap-3 justify-center p-5 rounded-xl bg-gray-100 cursor-pointer text-black hover:shadow-lg"
      onClick={() => {
        navigate('/student/module_payment'); // Navigate to the module payment page
        addModuleKuppi(headline); // Add the selected module's headline to context
      }}
    >
      {/* Display module main image */}
      <img
        src={mainImage}
        alt="Main-Image"
        className="w-full h-56 object-cover rounded-lg bg-gray-400"
      />

      {/* Display module headline (with truncation for long text) */}
      <p className="text-left font-semibold text-[18pt]">
        {headline.length >= 27 ? headline.slice(0, 25) + "..." : headline}
      </p>

      {/* Display module description (with truncation for long text) */}
      <p className="font-normal text-[12pt]">
        {description.length >= 90 ? description.slice(0, 87) + "..." : description}
      </p>

      {/* Display rating and number of ratings */}
      <div className="w-full h-fit flex flex-row items-center gap-1">
        <p className="text-[12pt] font-normal text-blue-500">{rate}</p>
        <div className="flex flex-row">{renderStars(rate)}</div> {/* Render stars based on rating */}
        <p className="text-[12pt] font-normal text-gray-400 ml-1">({numofrated})</p>
      </div>

      {/* Display tutor information and price */}
      <div className="flex flex-row items-center justify-between mt-3">
        <div className="flex flex-row items-center gap-2">
          {/* Tutor profile image */}
          <img
            src={tutorImage}
            alt="-"
            className="w-12 h-12 object-cover rounded-full bg-gray-400"
          />
          <div>
            {/* Tutor's name and enrolled year */}
            <span className="block text-sm font-semibold">{tutorName}</span>
            <span className="block text-xs text-gray-500">{tutorEnrolledYear}</span>
          </div>
        </div>
        {/* Module price */}
        <p className="w-auto h-fit text-right text-lg font-bold text-blue-600">LKR.{price}</p>
      </div>
    </div>
  );
};

export default SearchedModuleBox;