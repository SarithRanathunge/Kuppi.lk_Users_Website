import React, { createContext, useState, useEffect } from 'react';

// Create the Context to share authentication state and functions across components
export const AuthContext = createContext();

// Create a Provider Component to wrap the app and provide the context
export const AuthProvider = ({ children }) => {
    // State variables to manage login status and user data
    const [login, setLogin] = useState(false); // Tracks if the student is logged in
    const [tutorlogin, setTutorLogin] = useState(false); // Tracks if the tutor is logged in
    const [university, setUniversity] = useState('Empty University'); // Stores the selected university name
    const [module, newModule] = useState('Empty module'); // Stores the selected module name
    const [moduleKuppi, setModuleKuppi] = useState('Empty module kuppi'); // Stores module info for Kuppi

    // useEffect hook runs on component mount to check if user or tutor is logged in
    useEffect(() => {
        checkLoginStatus(); // Check if student is logged in
        checkTutorLoginStatus(); // Check if tutor is logged in
    }, []);

    // Function to update the university state
    const addUniversity = (university) => {
        setUniversity(university); // Set the university name
    };

    // Function to update the module state
    const addModuleName = (module) => {
        newModule(module); // Set the module name
    };

    // Function to update the moduleKuppi state
    const addModuleKuppi = (moduleKuppi) => {
        setModuleKuppi(moduleKuppi); // Set module info for Kuppi
    };

    // Function to check if a student is logged in by checking local storage
    const checkLoginStatus = () => {
        const studentdata = localStorage.getItem('student-role');
        if (studentdata === 'approved') {
            setLogin(true); // If the student is approved, set login to true
        }
    };

    // Function to check if a tutor is logged in by checking local storage
    const checkTutorLoginStatus = () => {
        const tutordata = localStorage.getItem('tutor-role');
        if (tutordata === 'approved') {
            setTutorLogin(true); // If the tutor is approved, set tutor login to true
        }
    };

    // Function to handle student login, save data to local storage, and update state
    const loginUser = (role, uni) => {
        localStorage.setItem('student-role', role); // Save student role to local storage
        localStorage.setItem('university-student-role', uni); // Save university name to local storage
        setLogin(true); // Set login to true
    };

    // Function to handle tutor login, save data to local storage, and update state
    const loginTutor = (role, uni) => {
        localStorage.setItem('tutor-role', role); // Save tutor role to local storage
        localStorage.setItem('university-tutor-role', uni); // Save university name to local storage
        setTutorLogin(true); // Set tutor login to true
    };

    // Function to handle student logout, remove data from local storage, and update state
    const logoutUser = () => {
        localStorage.removeItem('student-role'); // Remove student role from local storage
        localStorage.removeItem('university-student-role'); // Remove university name from local storage
        setLogin(false); // Set login to false
    };

    // Function to handle tutor logout, remove data from local storage, and update state
    const logoutTutor = () => {
        localStorage.removeItem('student-role'); // Remove student role from local storage
        localStorage.removeItem('tutor-role'); // Remove tutor role from local storage
        localStorage.removeItem('university-tutor-role'); // Remove university name from local storage
        setTutorLogin(false); // Set tutor login to false
    };

    return (
        // Provide the context values (state and functions) to child components
        <AuthContext.Provider value={{
            login, loginUser, logoutUser, tutorlogin, loginTutor, logoutTutor,
            university, addUniversity, module, addModuleName, moduleKuppi, addModuleKuppi
        }}>
            {children} {/* Render the children components within the provider */}
        </AuthContext.Provider>
    );
};