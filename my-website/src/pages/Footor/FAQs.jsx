import React from 'react';

const FAQs = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#005eff', marginBottom: '1.5rem' }}>Frequently Asked Questions</h1>
      <div style={{ marginBottom: '1rem' }}>
        <strong>Q: How do I cancel a booking?</strong>
        <p style={{ marginLeft: '1rem' }}>A: Go to your bookings and click “Cancel Booking”. Follow the instructions based on property policy.</p>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <strong>Q: Can I pay at the hotel?</strong>
        <p style={{ marginLeft: '1rem' }}>A: Yes, if the hotel supports pay-at-property option. Check during checkout.</p>
      </div>
      <div>
        <strong>Q: Do I need ID to check in?</strong>
        <p style={{ marginLeft: '1rem' }}>A: Yes, government-issued ID is mandatory at check-in for all guests.</p>
      </div>
    </div>
  );
};

export default FAQs;
