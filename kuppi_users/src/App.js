import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import SubPortfolioApp from './portfolio/SubPortfolioApp';
import Home from './portfolio/pages/Home';
import Contact from './portfolio/pages/Contact';
import StudentLogin from './portfolio/pages/Login';
import CreateAccount from './portfolio/pages/CreateAccount';
import SubStudentApp from './users/student/SubStudentApp';
import StudentHome from './users/student/pages/StudentHome';
import TutorLogin from './users/student/pages/TutorLogin';
import SubTutorApp from './users/tutor/SubTutorApp';
import TutorHome from './users/tutor/pages/TutorHome';

const App = () => {
    const { login } = useContext(AuthContext);
    const { tutorlogin } = useContext(AuthContext);

    return (
        <Routes>
            {/* Portfolio Routes */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/" element={<SubPortfolioApp />}>
                <Route path="home" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<StudentLogin />} />
                <Route path="create" element={<CreateAccount />} />
            </Route>

            {/* Student Routes */}
            <Route path="/student" element={login ? <SubStudentApp /> : <Navigate to="/home" replace />}>
                <Route index element={<Navigate to="home" replace />} />
                <Route path="home" element={<StudentHome />} />
                <Route path="login" element={<TutorLogin />} />
            </Route>

            {/* Tutor Routes */}
            <Route path="/tutor" element={tutorlogin ? <SubTutorApp /> : <Navigate to="/student/home" replace />}>
                <Route index element={<Navigate to="home" replace />} />
                <Route path="home" element={<TutorHome />} />
            </Route>
        </Routes>
    );
};

export default App;