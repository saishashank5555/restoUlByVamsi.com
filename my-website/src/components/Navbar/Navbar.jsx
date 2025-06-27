import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import MobileMenuToggle from './MobileMenuToggle';
import MenuLinks from './MenuLinks';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Logo />
        <MobileMenuToggle toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        <MenuLinks
          isMobileMenuOpen={isMobileMenuOpen}
          onLinkClick={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
