import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#005eff', marginBottom: '1rem' }}>Privacy Policy</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        EasyStay values your privacy. This policy outlines how we collect, use, and protect your information.
      </p>
      <ul style={{ paddingLeft: '1.2rem', fontSize: '1.05rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>✔ We collect basic personal info for booking and account access.</li>
        <li style={{ marginBottom: '0.5rem' }}>✔ Data is encrypted and stored securely.</li>
        <li style={{ marginBottom: '0.5rem' }}>✔ We do not share data with third parties without consent.</li>
      </ul>
      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>Reach us at <strong>privacy@easystay.com</strong> for privacy-related queries.</p>
    </div>
  );
};

export default PrivacyPolicy;
