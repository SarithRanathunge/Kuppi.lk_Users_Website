import React, {useContext} from 'react'; // Import React and useContext hook// Import the AuthContext to use the context data
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigating between routes
import { AuthContext } from '../../../context/AuthContext'; // Import the AuthContext component

const FacultyBox = ({number, degree}) => {
  // Destructuring props 'number' and 'degree' to display module information
  const navigate = useNavigate(); // Initialize the navigate function for routing
  const { addTutorDegree } = useContext(AuthContext);

  // handleSubmit function that adds the selected module to the context and navigates to the module selection page
  const handleSubmit = () => {
    addTutorDegree(degree);
    navigate('/tutor/select_year'); // Navigate to the module selection and search page
  };

  return (
    <div 
      className='bg-white rounded-lg py-5 px-7 cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-lg'
      onClick={handleSubmit} // On click, trigger the handleSubmit function
    >
        {/* Display module number (increased by 1 for a human-readable index) and module name */}
        <p className='text-[18pt] font-medium'>{number + 1}. {degree}</p>
    </div>
  );
}

export default FacultyBox