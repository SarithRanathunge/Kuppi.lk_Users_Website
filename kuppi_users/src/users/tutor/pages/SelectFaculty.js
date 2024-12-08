import React from 'react'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import FacultyBox from '../components/FacultyBox'
import { useNavigate } from 'react-router-dom'

const SelectFaculty = () => {
  const navigate = useNavigate()

  const facultyArray = [
    { faculty: 'BSC Computing'},
    { faculty: 'BSC Information Technology for Business'},
    { faculty: 'BSC Human Resourse Management'},
    { faculty: 'BSC Managemnt and Leadership'},
    { faculty: 'BSC Professional Accounting'},
    { faculty: 'BSC Digital Banking and Finance'},
    { faculty: 'BSC Ethical Hacking and Network Security'},
    { faculty: 'BSC Computing'},
    { faculty: 'BSC Computing'}
]

  return (
    <div className='w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative px-[100px] pt-[18px]'>
      {/* Back Button */}
      <div className='absolute top-6 left-6' onClick={()=>{navigate('/tutor/select_year')}}>
        <IoIosArrowDropleftCircle className='text-[40px] text-blue-500' />
      </div>

      {/* Header Text */}
      <div>
        <span className='text-[24pt] font-semibold'>Faculty of Computing Courses</span>
      </div>

      <div className='w-full h-full flex flex-col gap-5 py-8 px-14'>
        {facultyArray.map((data, index) => (
          <FacultyBox key={index} number={index} faculty={data.faculty}/>  // Passing data to ModuleBox component
        ))}
      </div>
    </div>
  )
}

export default SelectFaculty