import React from 'react'
import { Outlet } from 'react-router-dom';
import StudentNavBar from './components/StudentNavBar';

const SubStudentApp = () => {
  return (
    <div>
      <StudentNavBar/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default SubStudentApp