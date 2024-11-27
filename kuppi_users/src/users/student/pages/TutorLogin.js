import React from 'react';
import { useNavigate } from 'react-router-dom';

const TutorLogin = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('role', 'tutor');
        navigate('/tutor');
    };

    return (
        <div>
            <h1>Tutor Login</h1>
            <button onClick={handleLogin}>Login as Tutor</button>
        </div>
    );
};

export default TutorLogin;