import React from 'react'; // Import React library
import { Outlet } from 'react-router-dom'; // Import Outlet for rendering child routes
import StudentNavBar from './components/StudentNavBar'; // Import StudentNavBar component

const SubStudentApp = () => {
  // The SubStudentApp component serves as a layout for the student section with a navigation bar and dynamic child route rendering
  return (
    <div>
      {/* StudentNavBar component that contains the navigation menu specific for the student section */}
      <StudentNavBar />

      {/* The Outlet component renders the matched child route under this component */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default SubStudentApp;