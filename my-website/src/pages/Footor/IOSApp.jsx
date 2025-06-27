import React from 'react';

const IOSApp = () => {
  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333'
    }}>
      <h1 style={{ fontSize: '2.4rem', color: '#0070c9', marginBottom: '1rem' }}>Get the EasyStay iOS App</h1>

      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Discover and book hotels, guest houses, and more on the go with our iOS app. Designed for speed, comfort, and simplicity—travel planning just got easier.
      </p>

      <img
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt="Download on App Store"
        style={{ width: '180px', marginBottom: '2rem' }}
      />

      <div style={{
        backgroundColor: '#f4f4f4',
        padding: '1.5rem',
        borderRadius: '10px',
        lineHeight: '1.6'
      }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>🌟 Top Benefits:</h3>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
          <li>Smooth and intuitive user interface</li>
          <li>Verified reviews and ratings</li>
          <li>Offline booking reminders</li>
          <li>Manage trips from anywhere</li>
          <li>Biometric login support (Face ID & Touch ID)</li>
        </ul>
      </div>
    </div>
  );
};

export default IOSApp;
