import React from 'react';

const AndroidApp = () => {
  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333'
    }}>
      <h1 style={{ fontSize: '2.4rem', color: '#0a84ff', marginBottom: '1rem' }}>Get the EasyStay Android App</h1>

      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Enjoy hassle-free hotel bookings and exclusive deals with our Android app. Whether you're planning a trip or looking for a quick stay, EasyStay helps you find the perfect place.
      </p>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
        alt="Download on Google Play"
        style={{ width: '200px', marginBottom: '2rem' }}
      />

      <div style={{
        backgroundColor: '#f5f7fa',
        padding: '1.5rem',
        borderRadius: '10px',
        lineHeight: '1.6'
      }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>🔑 Key Features:</h3>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
          <li>Instant booking with real-time availability</li>
          <li>Easy cancellation and refund process</li>
          <li>Secure payments and wallet integration</li>
          <li>24/7 customer support</li>
          <li>Track your bookings and history easily</li>
        </ul>
      </div>
    </div>
  );
};

export default AndroidApp;
