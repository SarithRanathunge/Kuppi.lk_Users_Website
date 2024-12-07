import React, { useState, useContext, useRef, useEffect } from "react";  // Importing React and necessary hooks
import { IoIosArrowDropleftCircle } from "react-icons/io";  // Importing back arrow icon from react-icons
import { FiCalendar } from "react-icons/fi";  // Importing calendar icon from react-icons
import { useNavigate } from "react-router-dom";  // Importing useNavigate hook for navigation
import { AuthContext } from "../../../context/AuthContext";  // Importing AuthContext to access module value
import SearchedModuleBox from "../components/SearchedModuleBox";  // Importing SearchedModuleBox component
import SearchedMainImage from '../../../assets/searched-module-main-image.jpg';  // Importing sample image for searched module
import tutorImage from '../../../assets/user.jpg';  // Importing sample tutor image

const ModuleSelectAndSearch = () => {
  const navigate = useNavigate();  // Initialize navigate function for routing
  const { module } = useContext(AuthContext);  // Access the module value from AuthContext

  // State management for search, price range, and selected year
  const [search, setSearch] = useState("");  // State for search input
  const [priceRange, setPriceRange] = useState("");  // State for price range input
  const [year, setYear] = useState("");  // State for selected year
  const [showYearDropdown, setShowYearDropdown] = useState(false);  // State to toggle year dropdown visibility
  const dropdownRef = useRef(null);  // Ref to detect clicks outside of the year dropdown

  // Function to generate years from the current year to 1900
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= 1900; i--) {
      years.push(i);
    }
    return years;  // Return array of years
  };

  // Handler for selecting a year from the dropdown
  const handleYearSelect = (selectedYear) => {
    setYear(selectedYear);  // Set the selected year
    setShowYearDropdown(false); // Close dropdown after selection
  };

  // Close the dropdown if a click happens outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowYearDropdown(false); // Close dropdown
      }
    };

    // Event listener to detect outside clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sample array for the searched modules
  const searchedArray = [
    {mainImage: {SearchedMainImage}, headline:'Figma UI/UX Design Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage: {tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage: {SearchedMainImage}, headline:'Figma UI/UX Design Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.2, numofrated:21, tutorImage: {tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage: {SearchedMainImage}, headline:'Figma UI/UX Design Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:4.5, numofrated:21, tutorImage: {tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage: {SearchedMainImage}, headline:'Figma UI/UX Design Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:2.6, numofrated:21, tutorImage: {tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage: {SearchedMainImage}, headline:'Figma UI/UX Design Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:4.8, numofrated:21, tutorImage: {tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage: {SearchedMainImage}, headline:'Figma UI/UX Design Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:5, numofrated:21, tutorImage: {tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage: {SearchedMainImage}, headline:'Figma UI/UX Design Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage: {tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage: {SearchedMainImage}, headline:'Figma UI/UX Design Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:1.5, numofrated:21, tutorImage: {tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage: {SearchedMainImage}, headline:'Figma UI/UX Design Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:4.9, numofrated:21, tutorImage: {tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage: {SearchedMainImage}, headline:'Figma UI/UX Design Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.0, numofrated:21, tutorImage: {tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage: {SearchedMainImage}, headline:'Figma UI/UX Design Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage: {tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage: {SearchedMainImage}, headline:'Figma UI/UX Design Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.2, numofrated:21, tutorImage: {tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage: {SearchedMainImage}, headline:'Figma UI/UX Design Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.3, numofrated:21, tutorImage: {tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'}
  ];

  return (
    <div className="w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative p-16 gap-5">
      
      {/* Back button to navigate to the course modules page */}
      <div
        className="absolute top-6 left-6"
        onClick={() => {
          navigate("/student/course_modules");  // Navigate to the course modules page
        }}
      >
        <IoIosArrowDropleftCircle className="text-[40px] text-blue-500 cursor-pointer" />  {/* Back arrow icon */}
      </div>

      {/* Display the module name */}
      <div>
        <span className="text-[24pt] font-semibold">{module}</span>
      </div>

      <div className="w-full h-auto flex flex-row bg-white rounded-lg p-8 gap-9">
        
        {/* Left side filter section */}
        <div className="w-3/12 h-auto flex flex-col py-3">
          <form className="flex flex-col gap-3">
            {/* Search filter input */}
            <div className="w-auto h-auto flex flex-col gap-1">
              <label htmlFor="Search" className="font-medium">Search</label>
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);  // Update search state as user types
                }}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Search Here"
              />
            </div>

            {/* Price Range filter input */}
            <div className="w-auto h-auto flex flex-col gap-1">
              <label htmlFor="Price Range" className="font-medium">Price Range</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">Rs.</span>
                <input
                  type="text"
                  value={priceRange}
                  onChange={(e) => {
                    setPriceRange(e.target.value.replace(/[^\d]/g, ""));  // Allow only digits
                  }}
                  placeholder="Enter Amount"
                  className="w-full px-4 pl-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Year filter input with dropdown */}
            <div className="w-auto h-auto flex flex-col gap-1 relative">
              <label htmlFor="Year" className="font-medium">Year</label>
              <div className="relative" ref={dropdownRef}>
                <input
                  type="text"
                  value={year}
                  readOnly
                  onClick={() => setShowYearDropdown(!showYearDropdown)}  // Toggle dropdown visibility on click
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 cursor-pointer"
                  placeholder="Select Year"
                />
                <FiCalendar
                  className="absolute right-3 top-2 text-gray-500 text-xl cursor-pointer"
                  onClick={() => setShowYearDropdown(!showYearDropdown)}  // Toggle dropdown visibility on icon click
                />
                {/* Year dropdown list */}
                {showYearDropdown && (
                  <ul className="absolute top-12 left-0 w-full max-h-40 overflow-y-auto border-2 border-gray-300 bg-white rounded-md shadow-md z-10">
                    {generateYears().map((yr) => (
                      <li
                        key={yr}
                        onClick={() => handleYearSelect(yr)}  // Handle year selection
                        className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                      >
                        {yr}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Right side display of searched modules */}
        <div className="w-9/12 h-full flex flex-wrap gap-7 px-8 border-l-4 border-gray-300 py-3">
          {/* If there are results, display them */}
          {searchedArray.length > 0 ? (
            searchedArray.map((data, index) => (
              <SearchedModuleBox
                key={index}
                mainImage={data.mainImage}
                headline={data.headline}
                description={data.description}
                rate={data.rate}
                numofrated={data.numofrated}
                tutorImage={data.tutorImage}
                tutorName={data.tutorName}
                tutorEnrolledYear={data.tutorEnrolledYear}
                price={data.price}
              />
            ))
          ) : (
            //  Display message if no data found 
            <div className="w-full h-[235px] flex items-center justify-center text-[20pt] font-light">No Data...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleSelectAndSearch;  // Exporting the component for use elsewhere
