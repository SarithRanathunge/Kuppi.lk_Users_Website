import React, { createContext, useState, useEffect } from 'react';

// Create the Context
export const AuthContext = createContext();

// Create a Provider Component
export const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [tutorlogin, setTutorLogin] = useState(false);
    const [module, newModule] = useState('Empty module');

    useEffect(() => {
        checkLoginStatus();
        checkTutorLoginStatus();
    }, []);

    const addModuleName = (module)=>{
        newModule(module)
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

    const loginUser = (role) => {
        localStorage.setItem('student-role', role);
        setLogin(true);
    };

    const loginTutor = (role) => {
        localStorage.setItem('tutor-role', role);
        setTutorLogin(true);
    };

    const logoutUser = () => {
        localStorage.removeItem('student-role');
        setLogin(false);
    };

    const logoutTutor = () => {
        localStorage.removeItem('student-role');
        localStorage.removeItem('tutor-role');
        setTutorLogin(false);
    };

    return (
        <AuthContext.Provider value={{ login, loginUser, logoutUser, tutorlogin, loginTutor, logoutTutor, module, addModuleName}}>
            {children}
        </AuthContext.Provider>
    );
};