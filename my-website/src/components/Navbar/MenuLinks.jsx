import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const MenuLinks = ({ isMobileMenuOpen, onLinkClick }) => (
  <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
    <li><Link to="/" onClick={onLinkClick}>Home</Link></li>
    <li><DropdownMenu onLinkClick={onLinkClick} /></li>
    <li className="hide-on-mobile"><Link to="/contact" onClick={onLinkClick}>Contact Us</Link></li>
    <li className="login-dropdown">
      <span>Login</span>
      <ul className="dropdown-menu">
        <li><Link to="/login/user" onClick={onLinkClick}>User Login</Link></li>
        <li><Link to="/login/owner" onClick={onLinkClick}>Owner Login</Link></li>
      </ul>
    </li>
    <li><Link to="/signup" onClick={onLinkClick}>Sign Up</Link></li>
  </ul>
);

export default MenuLinks;
