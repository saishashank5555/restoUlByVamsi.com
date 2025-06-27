import React from 'react';

const HelpCenter = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#005eff', marginBottom: '1rem' }}>Help Center</h1>
      <p style={{ fontSize: '1.1rem' }}>
        Need assistance? We’re here to help. Browse common questions or chat with our support team.
      </p>
      <ul style={{ paddingLeft: '1.2rem', fontSize: '1.05rem', marginTop: '1rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>💬 How do I modify my booking?</li>
        <li style={{ marginBottom: '0.5rem' }}>💬 What payment options are accepted?</li>
        <li style={{ marginBottom: '0.5rem' }}>💬 How do I contact customer care?</li>
      </ul>
      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>Contact: <strong>help@easystay.com</strong></p>
    </div>
  );
};

export default HelpCenter;
