import React from 'react'
import { Outlet } from 'react-router-dom'; // Used to render child routes
import TutorNavBar from './components/TutorNavBar'; // Import the TutorNavBar component

const SubTutorApp = () => {
  return (
    <div>
      {/* Render the TutorNavBar at the top of the page */}
      <TutorNavBar/>
      <div>
        {/* Render the child components for the current route */}
        <Outlet/>
      </div>
    </div>
  )
}

export default SubTutorApp;