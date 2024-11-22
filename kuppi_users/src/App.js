import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './portfolio/subPortfolioApp.js';
import Tutor from './users/tutor/subTutorApp.js';
import Student from './users/student/subStudentApp.js';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/student" element={<Student />} />
        </Routes>
    </Router>
  );
}

export default App;