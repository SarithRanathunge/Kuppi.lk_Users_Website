import React, { useContext } from 'react'
// Importing the AuthContext to access shared state (university information)
import { AuthContext } from '../../../context/AuthContext'

const StudentYear = () => {
  // Using the useContext hook to access the current value of AuthContext
  const { university } = useContext(AuthContext)

  return (
    <div className='font-medium text-[16pt]'>
        {/* Displaying a message with the selected university and its year */}
        Select Your Year at University of <span className='text-[24pt] font-semibold text-blue-500'>{university}</span>
        
    </div>
  )
}

export default StudentYear