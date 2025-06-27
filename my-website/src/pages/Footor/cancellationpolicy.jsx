import React from 'react';

const CancellationPolicy = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#005eff', marginBottom: '1rem' }}>Cancellation Policy</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        We understand plans change. Here’s our flexible cancellation policy:
      </p>
      <ul style={{ paddingLeft: '1.2rem', fontSize: '1.05rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>✔ Free cancellation for most bookings within 24 hours.</li>
        <li style={{ marginBottom: '0.5rem' }}>✔ Non-refundable deals are labeled during booking.</li>
        <li style={{ marginBottom: '0.5rem' }}>✔ Cancellation deadlines vary by property.</li>
      </ul>
      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>Questions? Contact <strong>cancellations@easystay.com</strong></p>
    </div>
  );
};

export default CancellationPolicy;
