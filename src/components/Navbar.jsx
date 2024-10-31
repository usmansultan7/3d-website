import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react'; // Import Lottie
import logoAnimation from '../assets/logo.json'; // Adjust this path based on your folder structure
import '../css/Navbar.css'; // Ensure this path is correct

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Lottie 
          animationData={logoAnimation} 
          loop={true} 
          style={{ width: 100, height: 100 }} // Adjust size as needed
        />
      </div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
