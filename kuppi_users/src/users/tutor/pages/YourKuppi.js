import React, { useState } from 'react'; // Importing React and useState for state management
import { IoIosArrowDropleftCircle } from "react-icons/io"; // Importing back arrow icon
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation between routes
import { IoSearch } from "react-icons/io5"; // Importing search icon
import moduleImage from '../../../assets/searched-module-main-image.jpg'; // Importing a placeholder image for modules
import MyKuppiBox from '../components/MyKuppiBox'; // Importing the MyKuppiBox component for displaying module details

const YourKuppi = () => {
  const navigate = useNavigate(); // Hook for navigating between routes
  const [category, setCategory] = useState(); // State to manage selected category from the dropdown
  const [searchTerm, setSearchTerm] = useState(''); // State to manage search input value

  // Handler for updating the search input value
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handler for the search form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Preventing page reload on form submission
    console.log('Searching for:', searchTerm); // Logging the search term (replace with actual search logic)
  };

  // Array of dummy data representing kuppi sessions
  const kuppiArray = [
    { moduleImage: moduleImage, module: 'Figma UI /UX Design', price: '2500.00', purchased: 92, rate: 4.6, status: 'published' },
    { moduleImage: moduleImage, module: 'Introduction of Computer Science', price: '2500.00', purchased: 0, rate: 0, status: 'pending' },
    { moduleImage: moduleImage, module: 'Figma UI /UX Design', price: '2500.00', purchased: 92, rate: 4.6, status: 'published' },
    { moduleImage: moduleImage, module: 'Figma UI /UX Design', price: '2500.00', purchased: 92, rate: 4.6, status: 'published' },
    { moduleImage: moduleImage, module: 'Figma UI /UX Design', price: '2500.00', purchased: 92, rate: 4.6, status: 'published' },
    { moduleImage: moduleImage, module: 'Figma UI /UX Design', price: '2500.00', purchased: 92, rate: 4.6, status: 'published' },
    { moduleImage: moduleImage, module: 'Figma UI /UX Design', price: '2500.00', purchased: 92, rate: 4.6, status: 'published' },
    { moduleImage: moduleImage, module: 'Introduction of Computer Science', price: '2500.00', purchased: 0, rate: 0, status: 'pending' },
    { moduleImage: moduleImage, module: 'Introduction of Computer Science', price: '2500.00', purchased: 0, rate: 0, status: 'pending' },
    { moduleImage: moduleImage, module: 'Introduction of Computer Science', price: '2500.00', purchased: 0, rate: 0, status: 'pending' },
    { moduleImage: moduleImage, module: 'Introduction of Computer Science', price: '2500.00', purchased: 0, rate: 0, status: 'pending' }
  ];

  return (
    <div className='w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative px-[100px] pt-[18px]'>
      
      {/* Back button */}
      <div className='absolute top-6 left-6'>
        <IoIosArrowDropleftCircle className='text-[40px] text-blue-500' />
      </div>
      
      {/* Page title */}
      <div>
        <span className='text-[24pt] font-semibold'>Your Kuppi</span>
      </div>

      <div className='w-full h-full flex flex-col gap-7 pt-6'>
        
        {/* Search bar and filter section */}
        <div className='w-full h-full flex flex-row justify-between items-center'>
          
          {/* Search input */}
          <div className='h-auto flex flex-row gap-5'>
            <div className="h-full px-2 bg-white rounded-lg bg-transparent border-2 border-black">
              <form onSubmit={handleSubmit} className="w-[350px] flex flex-row gap-1">
                <input
                  type="text"
                  placeholder="Find Your Course"
                  value={searchTerm}
                  onChange={handleChange}
                  className="w-full text-[16px] p-3 border-2 bg-transparent border-none outline-none text-black"
                />
                <button type="submit" className="border-l-2 border-l-black pr-2 pl-3">
                  <IoSearch className="h-6 w-6 text-black" />
                </button>
              </form>
            </div>
            
            {/* Category dropdown */}
            <div className="w-auto h-auto flex flex-col px-2 py-3 rounded-lg bg-transparent border-2 border-black">
              <select
                value={category}
                onChange={(e) => { setCategory(e.target.value); }}
                className="w-full px-2 bg-transparent rounded-md outline-none border-none"
              >
                <option>Newest</option>
                <option>Last Month</option>
                <option>Last Year</option>
                <option>Published</option>
                <option>Pending</option>
              </select>
            </div>
          </div>

          {/* Button to create a new kuppi session */}
          <button className='px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium'
            onClick={() => {
              navigate('/tutor/select_degree'); // Navigate to select degree page
            }}
          >
            New Kuppi
          </button>
        </div>

        {/* List of kuppi sessions */}
        <div className='w-full h-full flex flex-col gap-3 px-2 py-2 overflow-y-auto' style={{ maxHeight: '500px' }}>
          {
            kuppiArray.map((data, index) => (
              <MyKuppiBox
                key={index} // Unique key for each list item
                moduleImage={data.moduleImage} // Module image
                module={data.module} // Module name
                price={data.price} // Module price
                purchased={data.purchased} // Number of purchases
                rate={data.rate} // Rating of the module
                status={data.status} // Publication status
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default YourKuppi; // Exporting the component for use in other parts of the application