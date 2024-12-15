import React from 'react'
import { IoIosArrowDropleftCircle } from 'react-icons/io' // Importing a back-arrow icon
import FacultyBox from '../components/DegreeBox' // Importing a reusable FacultyBox component
import { useNavigate } from 'react-router-dom' // Importing navigation hook

const SelectFaculty = () => {
  const navigate = useNavigate() // Hook to handle navigation between routes

  // Array containing data for each faculty
  const facultyArray = [
    { degree: 'BSC Computing' },
    { degree: 'BSC Information Technology for Business' },
    { degree: 'BSC Human Resource Management' },
    { degree: 'BSC Management and Leadership' },
    { degree: 'BSC Professional Accounting' },
    { degree: 'BSC Digital Banking and Finance' },
    { degree: 'BSC Ethical Hacking and Network Security' },
    { degree: 'BSC Computing' },
    { degree: 'BSC Computing' }
  ]

  return (
    <div className='w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative px-[100px] pt-[18px]'>
      {/* Back Button */}
      <div 
        className='absolute top-6 left-6 cursor-pointer' 
        onClick={() => { navigate('/tutor/home') }} // Navigate to the previous page when clicked
      >
        <IoIosArrowDropleftCircle className='text-[40px] text-blue-500' />
      </div>

      {/* Header Text */}
      <div>
        <span className='text-[24pt] font-semibold'>Faculty of Computing Courses</span>
      </div>

      {/* Faculty List Section */}
      <div className='w-full h-full flex flex-col gap-5 py-8 px-14'>
        {facultyArray.map((data, index) => (
          // Map through the facultyArray and pass data to the FacultyBox component
          <FacultyBox 
            key={index} // Unique key for each FacultyBox
            number={index} // Passing the index of the faculty as a prop
            degree={data.degree} // Passing the degree name as a prop
          />
        ))}
      </div>
    </div>
  )
}

export default SelectFaculty