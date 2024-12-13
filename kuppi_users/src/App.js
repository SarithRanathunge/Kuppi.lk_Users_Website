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
import CourseModules from './users/student/pages/CourseModules';
import ModuleSelectAndSearch from './users/student/pages/ModuleSelectAndSearch';
import ModulePayment from './users/student/pages/ModulePayment';
import MyKuppi from './users/student/pages/MyKuppi';
import StudentYear from './users/student/pages/StudentYear';
import TutorLogin from './users/student/pages/TutorLogin';
import SubTutorApp from './users/tutor/SubTutorApp';
import TutorHome from './users/tutor/pages/TutorHome';
import Withdrawal from './users/tutor/pages/Withdrawal';
import Earnings from './users/tutor/pages/Earnings';
import SelectYear from './users/tutor/pages/SelectYear';
import SelectFaculty from './users/tutor/pages/SelectFaculty';
import UploadSection from './users/tutor/pages/UploadSection';
import UploadKuppiSession from './users/tutor/pages/UploadKuppiSession';
import UploadFilesSection from './users/tutor/pages/UploadFilesSection';

const App = () => {
    //get the login from the AuthContext for acessability in each user stage
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
                <Route path="course_modules" element={<CourseModules />} />
                <Route path="module_select_and_search" element={<ModuleSelectAndSearch />} />
                <Route path="module_payment" element={<ModulePayment />} />
                <Route path="mykuppi" element={<MyKuppi />} />
                <Route path="student_year" element={<StudentYear />} />
            </Route>

            {/* Tutor Routes */}
            <Route path="/tutor" element={tutorlogin ? <SubTutorApp /> : <Navigate to="/student/home" replace />}>
                <Route index element={<Navigate to="home" replace />} />
                <Route path="home" element={<TutorHome />} />
                <Route path="withdrawal" element={<Withdrawal />} />
                <Route path="earnings" element={<Earnings />} />
                <Route path="select_year" element={<SelectYear />} />
                <Route path="select_faculty" element={<SelectFaculty />} />
                <Route path="Upload_section" element={<UploadSection />} />
                <Route path="upload_kuppi" element={<UploadKuppiSession />} />
                <Route path="upload_files" element={<UploadFilesSection />} />
            </Route>
        </Routes>
    );
};

export default App;