// src/Sections/Home/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import './HomeSection.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';

const placeholderTexts = [
  'Search Goa',
  'Search Taj Hotel',
  'Search Mumbai',
  'Search Oberoi Grand',
  'Search Manali',
  'Search Jaipur Palace',
  'Search Shimla',
];

const heroImages = [
  "https://www.sotc.in/blog/wp-content/uploads/2020/05/Honeymoon-Destinations-in-July-Featured-Image.jpg",
  "https://s7ap1.scene7.com/is/image/incredibleindia/birla-temple-hyderabad-secunderabad-telangana-1-attr-hero?qlt=82&ts=1726652871883",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Charminar-Pride_of_Hyderabad.jpg/960px-Charminar-Pride_of_Hyderabad.jpg",
];

const HeroSection = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [heroImgIndex, setHeroImgIndex] = useState(0);

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    setCheckInDate(today.toISOString().split('T')[0]);
    setCheckOutDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-container">
          {/* Left content */}
          <div className="hero-content">
            <h1 className="hero-title">Find your next stay</h1>
            <p className="hero-subtitle">
              Search hotels, guest houses, service apartments & more – only on Resto.com
            </p>
            <div className="search-bar">
              <div className="search-icon-input">
                <FaMapMarkerAlt className="search-icon" />
                <input
                  type="text"
                  placeholder={placeholderTexts[placeholderIndex]}
                  className="search-input"
                />
              </div>
              <div className="search-icon-input">
                <FaCalendarAlt className="search-icon" />
                <input
                  type="date"
                  className="search-input"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>
              <div className="search-icon-input">
                <FaCalendarAlt className="search-icon" />
                <input
                  type="date"
                  className="search-input"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>
              <div className="search-icon-input">
                <FaUser className="search-icon" />
                <select className="search-input">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
              <button className="search-button">Search</button>
            </div>
          </div>

          {/* Right image */}
          <div className="hero-image-container">
            <img
              src={heroImages[heroImgIndex]}
              alt="Hyderabad Highlight"
              className="hero-image"
              onError={e => e.target.src = "https://via.placeholder.com/320x200?text=No+Image"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
