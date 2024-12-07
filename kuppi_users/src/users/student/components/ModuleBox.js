import React, {useContext} from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const ModuleBox = ({number, module}) => {
  const navigate = useNavigate()
  const {addModuleName} = useContext(AuthContext);

  const handleSubmit=()=>{
    addModuleName(module)
    navigate('/student/module_select_and_search')
  }

  return (
    <div className='bg-white rounded-lg py-5 px-7 cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-lg'
     onClick={handleSubmit}
    >
        <p className='text-[18pt] font-medium'>{number+1}. {module}</p>
    </div>
  )
}

export default ModuleBox