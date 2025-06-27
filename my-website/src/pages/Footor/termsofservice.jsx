import React from 'react';

const TermsOfService = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#005eff', marginBottom: '1rem' }}>Terms of Service</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        By accessing EasyStay, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully.
      </p>
      <ul style={{ paddingLeft: '1.2rem', fontSize: '1.05rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>✔ Bookings are subject to availability and confirmation.</li>
        <li style={{ marginBottom: '0.5rem' }}>✔ Cancellations and modifications must follow property-specific policies.</li>
        <li style={{ marginBottom: '0.5rem' }}>✔ Any misuse or fraudulent activities will lead to account suspension.</li>
      </ul>
      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>For questions, contact us at <strong>support@easystay.com</strong>.</p>
    </div>
  );
};

export default TermsOfService;
