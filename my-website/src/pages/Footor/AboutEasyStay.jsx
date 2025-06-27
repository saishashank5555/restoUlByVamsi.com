// === src/pages/footor/AboutEasyStay.jsx ===
import React from 'react';

const AboutEasyStay = () => {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#2c3e50',
        boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#005eff',
          marginBottom: '1.5rem',
        }}
      >
        About EasyStay
      </h1>

      <div
        style={{
          backgroundColor: '#f0f8ff',
          padding: '1.5rem',
          borderRadius: '12px',
          marginBottom: '2rem',
        }}
      >
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          EasyStay is India's trusted platform for booking hotels, guest houses, service apartments,
          and banquet halls. Whether you're a business traveler or on a family vacation, we’ve got
          the perfect stay for you.
        </p>
        <p style={{ fontSize: '1.1rem' }}>
          With real-time availability, verified listings, 24/7 customer support, and a seamless
          booking experience, EasyStay is your one-stop travel companion.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}
      >
        <div style={{ border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '10px' }}>
          <h3 style={{ color: '#005eff', marginBottom: '0.5rem' }}>👥 Trusted by Millions</h3>
          <p style={{ fontSize: '0.95rem' }}>
            Over 5 million users trust EasyStay for their travel and stay needs across India.
          </p>
        </div>
        <div style={{ border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '10px' }}>
          <h3 style={{ color: '#005eff', marginBottom: '0.5rem' }}>🌐 Wide Network</h3>
          <p style={{ fontSize: '0.95rem' }}>
            We cover 500+ cities and towns with verified properties and instant booking.
          </p>
        </div>
        <div style={{ border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '10px' }}>
          <h3 style={{ color: '#005eff', marginBottom: '0.5rem' }}>💬 24/7 Support</h3>
          <p style={{ fontSize: '0.95rem' }}>
            Our support team is available around the clock to assist you with any queries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEasyStay;
