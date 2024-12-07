import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 

const UniversityBadge = ({logo, university}) => {
    const navigate = useNavigate();
    const { addUniversity} =useContext(AuthContext)
  
    //click action of the university badge
    const onClickBadge = () => {
        const studentdata = localStorage.getItem('student-role');
        //check the user already login or not (already token saved or not)
        if (studentdata === 'approved') { 
            if(localStorage.getItem('university-student-role') === university){
              navigate('/student/course_modules')
              addUniversity(university)
            }else{
              navigate('/student/student_year')
              addUniversity(university)
            }
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