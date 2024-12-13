import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'

const YearBox = ({num}) => {
  const navigate = useNavigate()
  const {addTutorYear} = useContext(AuthContext)
  return (
    <div className="w-[300px] h-[300px] flex flex-col justify-center gap-10 items-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
    onClick={()=>{
        addTutorYear(num)
        navigate('/tutor/select_faculty')
    }}
    >
     <div className='flex flex-row font-bold'>
        <span className='h-[100px] flex items-center text-[120pt] '>{num}</span>
        <span className='h-[35px] flex items-center text-[48pt] '>st</span>
     </div>
     <span className='h-[45px] flex items-center text-[52pt] '>Year</span>
    </div>
  )
}

export default YearBox