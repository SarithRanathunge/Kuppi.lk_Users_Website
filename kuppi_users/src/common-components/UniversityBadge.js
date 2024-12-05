import React from 'react'
import { useNavigate } from 'react-router-dom';

const UniversityBadge = ({logo}) => {
    const navigate = useNavigate();
  
    const onClickBadge = () => {
        const studentdata = localStorage.getItem('student-role');
        if (studentdata === 'approved') {
            navigate('/student/home')
        }else{
          navigate('/login')
        }
    };

  return (
    <div className='w-[250px] h-[250px] flex items-center justify-center rounded-3xl border-4 border-blue-500 p-5 cursor-pointer'
     onClick={onClickBadge}
    >
        <img src={logo} alt="university logo" className='object-contain'/>
    </div>
  )
}

export default UniversityBadge