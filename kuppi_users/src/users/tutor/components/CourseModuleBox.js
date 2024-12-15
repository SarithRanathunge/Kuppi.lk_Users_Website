import React, {useContext} from 'react'; // Import React and useContext hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigating between routes
import { AuthContext } from '../../../context/AuthContext';

const CourseModuleBox = ({number, module}) => {
  // Destructuring props 'number' and 'module' to display module information
  const navigate = useNavigate(); // Initialize the navigate function for routing
  const { addTutorCourseModule} = useContext(AuthContext)

  const handleSubmit = ()=>{
    addTutorCourseModule(module)
    navigate('/tutor/upload_files'); // Navigate to the module selection and search page
  }

  return (
    <div 
      className='bg-white rounded-lg py-5 px-7 cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-lg'
      onClick={handleSubmit} // On click, trigger the handleSubmit function
    >
        {/* Display module number (increased by 1 for a human-readable index) and module name */}
        <p className='text-[18pt] font-medium'>{number + 1}. {module}</p>
    </div>
  );
}

export default CourseModuleBox