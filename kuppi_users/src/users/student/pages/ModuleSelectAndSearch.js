import React, {useContext} from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'

const ModuleSelectAndSearch = () => {
  const navigate = useNavigate()
  const {module} = useContext(AuthContext)
  
  return (
    <div className='w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative p-16'>
        <div className='absolute top-6 left-6'
         onClick={()=>{navigate('/student/course_modules')}}
        >
           <IoIosArrowDropleftCircle className='text-[40px] text-blue-500' />
        </div>
        <div>
            <span className='text-[24pt] font-semibold'>{module}</span>
        </div>
    </div>
  )
}

export default ModuleSelectAndSearch