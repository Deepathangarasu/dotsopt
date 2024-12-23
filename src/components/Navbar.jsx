import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Function to close the menu when navigating
  const handleNavigation = () => {
    setIsOpen(false); // Close mobile menu
    setDropdownOpen(false); // Close dropdown menu
  };

  return (
    <nav className="navbar">
      <div className="footer-logo-brand">
        <NavLink to="/" onClick={handleNavigation}>
          <img
            alt="Dotsito Logo"
            src={"https://dotsito.s3.ap-south-1.amazonaws.com/dotspot_v2__white_new-removebg-preview.png"}
            width="170"
            height="50"
            className="d-inline-block align-top"
          />
        </NavLink>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleNavigation}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleNavigation}>
              About
            </NavLink>
          </li>

          {/* Solutions Dropdown */}
          <li className="dropdown" onClick={toggleDropdown}>
            <span className="dropdown-trigger">Solutions</span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <NavLink to="/solutions/object-detection" onClick={handleNavigation}>
                  Object Detection and Classification
                </NavLink>
                <NavLink to="/solutions/security" onClick={handleNavigation}>
                  Security and Surveillance
                </NavLink>
                <NavLink to="/solutions/workforce" onClick={handleNavigation}>
                  Works Monitoring and Attendance
                </NavLink>
                <NavLink to="/solutions/vehicle" onClick={handleNavigation}>
                  Vehicle Detection
                </NavLink>
              </div>
            )}
          </li>
          <li>
            <NavLink to="/product" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleNavigation}>
              Product
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
