import React from 'react'; // Import React
import { IoIosArrowDropleftCircle } from "react-icons/io"; // Import a left arrow icon from react-icons
import { useNavigate } from 'react-router-dom'; // Import hook for navigation between routes
import MyKuppiModuleBox from '../components/MyKuppiModuleBox'; // Import the reusable module card component
import SearchedMainImage from '../../../assets/searched-module-main-image.jpg'; // Import an image asset

/**
 * MyKuppi Component
 * This component renders a page displaying a list of "Kuppi" (modules) with details like image, headline, and progress.
 */
const MyKuppi = () => {
  const navigate = useNavigate(); // React Router's hook for programmatic navigation

  // Array of Kuppi data for rendering the list of modules
  const kuppiArray = [
    { mainImage: SearchedMainImage, headline: "Figma UI/UX Design Fundamentals", completeRate: 7 },
    { mainImage: SearchedMainImage, headline: "Figma UI/UX Design Fundamentals", completeRate: 90 },
    { mainImage: SearchedMainImage, headline: "Figma UI/UX Design Fundamentals", completeRate: 70 },
    { mainImage: SearchedMainImage, headline: "Figma UI/UX Design Fundamentals", completeRate: 12 },
    { mainImage: SearchedMainImage, headline: "Figma UI/UX Design Fundamentals", completeRate: 50 },
    { mainImage: SearchedMainImage, headline: "Figma UI/UX Design Fundamentals", completeRate: 60 },
    { mainImage: SearchedMainImage, headline: "Figma UI/UX Design Fundamentals", completeRate: 99 },
  ];

  return (
    // Main container for the page
    <div className='w-full min-h-[88.71vh] flex flex-col'>
      {/* Header Section */}
      <div className='w-full h-auto flex flex-row bg-blue-500 relative px-16 py-14 gap-5'>
        {/* Back Button */}
        <div
          className="absolute top-6 left-6"
          onClick={() => {
            navigate("/student/course_modules"); // Navigate back to the previous route
          }}
        >
          <IoIosArrowDropleftCircle className="text-[40px] text-white cursor-pointer" />
        </div>

        {/* Page Title */}
        <div className='ml-16'>
          <span className="text-[24pt] font-semibold text-white">My Kuppi</span>
        </div>
      </div>

      {/* Content Section */}
      <div className='w-full h-full flex flex-wrap gap-10 bg-gradient-to-b from-blue-200 to-gray-200 py-12 px-16'>
        {/* Conditional Rendering of Kuppi Modules */}
        {kuppiArray.length > 0 ? (
          // If there are Kuppi items, map through the array and render each as a MyKuppiModuleBox
          kuppiArray.map((data, index) => (
            <MyKuppiModuleBox
              key={index} // Unique key for each item (index used as a fallback here)
              mainImage={data.mainImage} // Pass image URL
              headline={data.headline} // Pass headline text
              completeRate={data.completeRate} // Pass completion percentage
            />
          ))
        ) : (
          // If there are no Kuppi items, display a placeholder message
          <div className="w-full h-[434.5px] flex items-center justify-center text-[20pt] font-light">
            No Kuppi...
          </div>
        )}
      </div>
    </div>
  );
};

export default MyKuppi; // Export the component for use in other parts of the application
