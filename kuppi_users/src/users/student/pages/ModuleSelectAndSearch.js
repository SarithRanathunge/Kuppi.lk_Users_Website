import React, { useState, useContext, useRef, useEffect } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import SearchedModuleBox from "../components/SearchedModuleBox";
import SearchedMainImage from '../../../assets/searched-module-main-image.jpg'
import tutorImage from '../../../assets/user.jpg'

const ModuleSelectAndSearch = () => {
  const navigate = useNavigate();
  const { module } = useContext(AuthContext);

  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [year, setYear] = useState("");
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Generate years from 1900 to the current year
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= 1900; i--) {
      years.push(i);
    }
    return years;
  };

  const handleYearSelect = (selectedYear) => {
    setYear(selectedYear);
    setShowYearDropdown(false); // Hide dropdown after selection
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowYearDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //Sample arry for SearchModuleBox
  const searchedArray = [
    {mainImage:{SearchedMainImage}, headline:'Figma UI/UX Desing Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage:{tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage:{SearchedMainImage}, headline:'Figma UI/UX Desing Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage:{tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage:{SearchedMainImage}, headline:'Figma UI/UX Desing Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage:{tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage:{SearchedMainImage}, headline:'Figma UI/UX Desing Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage:{tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage:{SearchedMainImage}, headline:'Figma UI/UX Desing Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage:{tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage:{SearchedMainImage}, headline:'Figma UI/UX Desing Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage:{tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage:{SearchedMainImage}, headline:'Figma UI/UX Desing Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage:{tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage:{SearchedMainImage}, headline:'Figma UI/UX Desing Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage:{tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage:{SearchedMainImage}, headline:'Figma UI/UX Desing Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage:{tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage:{SearchedMainImage}, headline:'Figma UI/UX Desing Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage:{tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'},
    {mainImage:{SearchedMainImage}, headline:'Figma UI/UX Desing Fundamental', description:'Use Figma to get a job in UI Design, User Interface, User Experience design.', rate:3.8, numofrated:21, tutorImage:{tutorImage}, tutorName:'Tharun Perera', tutorEnrolledYear:'2001 Enrolled', price:'10,000.00'}
  ]

  return (
    <div className="w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative p-16 gap-5">
      <div
        className="absolute top-6 left-6"
        onClick={() => {
          navigate("/student/course_modules");
        }}
      >
        <IoIosArrowDropleftCircle className="text-[40px] text-blue-500 cursor-pointer" />
      </div>
      <div>
        <span className="text-[24pt] font-semibold">{module}</span>
      </div>

      <div className="w-full h-auto flex flex-row bg-white rounded-lg p-8 gap-9">
        <div className="w-3/12 h-auto flex flex-col py-3">
          <form className="flex flex-col gap-3">
            <div className="w-auto h-auto flex flex-col gap-1">
              <label htmlFor="Search" className="font-medium">
                Search
              </label>
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Search Hear"
              />
            </div>
            <div className="w-auto h-auto flex flex-col gap-1">
              <label htmlFor="Price Range" className="font-medium">
                Price Range
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                  Rs.
                </span>
                <input
                  type="text"
                  value={priceRange}
                  onChange={(e) => {
                    setPriceRange(e.target.value.replace(/[^\d]/g, ""));
                  }}
                  placeholder="Enter Amount"
                  className="w-full px-4 pl-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="w-auto h-auto flex flex-col gap-1 relative">
              <label htmlFor="Year" className="font-medium">
                Year
              </label>
              <div className="relative" ref={dropdownRef}>
                <input
                  type="text"
                  value={year}
                  readOnly
                  onClick={() => setShowYearDropdown(!showYearDropdown)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 cursor-pointer"
                  placeholder="Select Year"
                />
                <FiCalendar
                  className="absolute right-3 top-2 text-gray-500 text-xl cursor-pointer"
                  onClick={() => setShowYearDropdown(!showYearDropdown)}
                />
                {showYearDropdown && (
                  <ul className="absolute top-12 left-0 w-full max-h-40 overflow-y-auto border-2 border-gray-300 bg-white rounded-md shadow-md z-10">
                    {generateYears().map((yr) => (
                      <li
                        key={yr}
                        onClick={() => handleYearSelect(yr)}
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

        <div className="w-9/12 h-full flex flex-wrap gap-7 px-8 border-l-4 border-gray-300 py-3">
        {searchedArray.length > 0 ? (
            searchedArray.map((data, index) => (
              <SearchedModuleBox
                key={index}
                mainImage={data.mainImage}
                headline={data.headline}
                description={data.description}
                rate={data.rate}
                numofrated = {data.numofrated}
                tutorImage={data.tutorImage}
                tutorName={data.tutorName}
                tutorEnrolledYear={data.tutorEnrolledYear}
                price={data.price}
              />
            ))
           ) : (
            <div className="w-full h-[235px] flex items-center justify-center text-[20pt] font-light">No Data...</div>
           )
          }
        </div>
      </div>
    </div>
  );
};

export default ModuleSelectAndSearch;
