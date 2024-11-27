import React from 'react'
import { Outlet } from 'react-router-dom';
import TutorNavBar from './components/TutorNavBar';

const SubTutorApp = () => {
  return (
    <div>
      <TutorNavBar/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default SubTutorApp