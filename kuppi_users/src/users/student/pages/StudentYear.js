import React, {useContext} from 'react'
import { AuthContext } from '../../../context/AuthContext'

const StudentYear = () => {
  const {university} = useContext(AuthContext)
  return (
    <div className='font-medium text-[16pt]'>
        Select Your Year at University of <span className='text-[24pt] font-semibold text-blue-500'>{university}</span>
    </div>
  )
}

export default StudentYear