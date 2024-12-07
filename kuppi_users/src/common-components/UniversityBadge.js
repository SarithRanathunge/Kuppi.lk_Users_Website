import React, { useContext } from 'react'; 
import { useNavigate } from 'react-router-dom'; // Hook for programmatic navigation
import { AuthContext } from '../context/AuthContext'; // Import the AuthContext for shared authentication logic

// Component to display a university badge with a clickable action
const UniversityBadge = ({ logo, university }) => {
  const navigate = useNavigate(); // Initialize navigation
  const { addUniversity } = useContext(AuthContext); // Get the addUniversity function from AuthContext
  
  // Function to handle click events on the badge
  const onClickBadge = () => {
    const studentdata = localStorage.getItem('student-role'); // Check if the student is approved via local storage
    if (studentdata === 'approved') { 
      // Check if the student's current university matches the selected university
      if (localStorage.getItem('university-student-role') === university) {
        navigate('/student/course_modules'); // Navigate to the course modules page
        addUniversity(university); // Update the university in the shared context
      } else {
        navigate('/student/student_year'); // Navigate to the student year selection page
        addUniversity(university); // Update the university in the shared context
      }
    } else {
      navigate('/login'); // Redirect unauthenticated users to the login page
    }
  };

  return (
    // Container for the university badge
    <div 
      className="w-[250px] h-[250px] flex items-center justify-center rounded-3xl border-4 border-blue-500 p-5 cursor-pointer"
      onClick={onClickBadge} // Trigger the click handler when the badge is clicked
    >
      {/* Display the university logo */}
      <img src={logo} alt="university logo" className="object-contain" />
    </div>
  );
};

export default UniversityBadge; // Export the component for use in other parts of the application