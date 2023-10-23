import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NAE from '../asset/NAEA.png';
import './nav.css'

const Nav = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav  className="navbar navbar-expand-lg" style={{position:'sticky',top:"0%"}}>
      <Link to="/" className="navbar-brand mx-5">
        <img src={NAE} style={{ width: '80px', background: 'white', borderRadius: '50%' }} alt="" />
      </Link>
      <button
        className={`navbar-toggler ${isNavbarOpen ? 'collapsed' : ''}`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={isNavbarOpen ? 'true' : 'false'}
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ml-auto" style={{position:'absolute',right:'50px'}}>
          <li className="nav-item">
            <Link to="/create-student" className="nav-link bg-white rounded-5 px-4 mx-3 my-1">
              Home
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/student-list" className="nav-link bg-white rounded-5 px-4 mx-3 my-1 bouncing-button">
            Results
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
