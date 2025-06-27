import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const NavLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Auto-close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Resto.com</Link>

        <button
          className={`menu-icon ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>

          <li className="dropdown">
            <span>Our Services</span>
            <ul className="dropdown-menu">
              <li><Link to="/hotels">Hotels</Link></li>
              <li><Link to="/service-apartments">Service Apartments</Link></li>
              <li><Link to="/guest-houses">Guest Houses</Link></li>
              <li><Link to="/banquet-halls">Banquet Halls</Link></li>
            </ul>
          </li>

          <li><Link to="/AboutUS">About Us</Link></li>

          {/* Replace dropdown with direct Sign In link */}
          <li>
            <Link to="/signin" style={{ color: "#000", fontWeight: 600 }}>
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
