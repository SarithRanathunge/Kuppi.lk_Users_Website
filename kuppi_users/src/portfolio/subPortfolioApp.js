import React from 'react'; // Import React library
import { Outlet } from 'react-router-dom'; // Import Outlet for rendering child routes
import NavBar from './components/NavBar.js'; // Import NavBar component

const SubPortfolioApp = () => {
  // The SubPortfolioApp component serves as a layout for sub-portfolios with a navigation bar and dynamic child route rendering
  return (
    <div>
      {/* NavBar component that contains the navigation menu */}
      <NavBar />

      {/* The Outlet component renders the matched child route */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default SubPortfolioApp;