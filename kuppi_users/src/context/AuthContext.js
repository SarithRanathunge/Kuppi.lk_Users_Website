import React, { createContext, useState, useEffect } from 'react';

// Create the Context
export const AuthContext = createContext();

// Create a Provider Component
export const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [tutorlogin, setTutorLogin] = useState(false);
    const [university, setUniversity] = useState('Empty University');
    const [module, newModule] = useState('Empty module');
    const [moduleKuppi, setModuleKuppi] = useState('Empty module kuppi');

    useEffect(() => {
        checkLoginStatus();
        checkTutorLoginStatus();
    }, []);

    const addUniversity = (university)=>{
        setUniversity(university);
    }

    const addModuleName = (module)=>{
        newModule(module)
    }

    const addModuleKuppi = (moduleKuppi) =>{
        setModuleKuppi(moduleKuppi);
    }

    const checkLoginStatus = () => {
        const studentdata = localStorage.getItem('student-role');
        if (studentdata === 'approved') {
            setLogin(true);
        }
    };

    const checkTutorLoginStatus = () => {
        const tutordata = localStorage.getItem('tutor-role');
        if (tutordata === 'approved') {
            setTutorLogin(true);
        }
    };

    const loginUser = (role, uni) => {
        localStorage.setItem('student-role', role);
        localStorage.setItem('university-student-role', uni);
        setLogin(true);
    };

    const loginTutor = (role, uni) => {
        localStorage.setItem('tutor-role', role);
        localStorage.setItem('university-tutor-role', uni);
        setTutorLogin(true);
    };

    const logoutUser = () => {
        localStorage.removeItem('student-role');
        localStorage.removeItem('university-student-role');
        setLogin(false);
    };

    const logoutTutor = () => {
        localStorage.removeItem('student-role');
        localStorage.removeItem('tutor-role');
        localStorage.removeItem('university-tutor-role');
        setTutorLogin(false);
    };

    return (
        <AuthContext.Provider value={{ login, loginUser, logoutUser, tutorlogin, loginTutor, logoutTutor, university, addUniversity,module, addModuleName, moduleKuppi, addModuleKuppi}}>
            {children}
        </AuthContext.Provider>
    );
};