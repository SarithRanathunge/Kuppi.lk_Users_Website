import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM to interact with the DOM
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter to handle routing
import reportWebVitals from './reportWebVitals'; // Import the Web Vitals report (used for measuring performance)
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider to manage authentication state
import App from './App'; // Import the main App component
import './index.css'; // Import global styles for the application

// Create the root element where the app will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root element
root.render(
    <React.StrictMode> {/* React.StrictMode helps in identifying potential problems in the app */}
        <AuthProvider> {/* Wrap the app with AuthProvider to manage and provide authentication context */}
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}> {/* Wrap the app with BrowserRouter for routing */}
                <App /> {/* Render the main App component */}
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);

// Measure and log web performance (optional, for performance analytics)
reportWebVitals();