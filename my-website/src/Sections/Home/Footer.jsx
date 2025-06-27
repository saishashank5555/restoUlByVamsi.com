import React from "react";
import { Link } from "react-router-dom";
import "./HomeSection.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Company</h4>
          <Link to="/about-easystay">About EasyStay</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/press">Press</Link>
          <Link to="/blog">Blog</Link>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <Link to="/hotels">Hotels</Link>
          <Link to="/guest-houses">Guest Houses</Link>
          <Link to="/service-apartments">Service Apartments</Link>
          <Link to="/banquet-halls">Banquet Halls</Link>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <Link to="/help-center">Help Center</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/cancellation-policy">Cancellation Policy</Link>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/security">Security</Link>
        </div>

        <div className="footer-column highlight-box">
          <h4>🌍 Language & Currency</h4>
          <select className="footer-select">
            <option>English - INR ₹</option>
            <option>English - USD $</option>
            <option>हिंदी - INR ₹</option>
          </select>
        </div>

        <div className="footer-column highlight-box">
          <h4>💌 Subscribe to Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-column">
          <h4>📲 Download App</h4>
          <Link to="/android-app">Android App</Link>
          <Link to="/ios-app">iOS App</Link>
        </div>

        <div className="footer-column">
          <h4>👨‍💼 Partner with Us</h4>
          <Link to="/list-your-property">
           List Your Property  with us
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} EasyStay. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
