import React from 'react';

const Security = () => {
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
        Your Security is Our Priority
      </h1>

      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        At EasyStay, we are committed to protecting your personal information and ensuring safe
        online experiences for all our users. We follow industry-leading standards to protect your
        data and privacy.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        <div style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ color: '#005eff', marginBottom: '0.5rem' }}>🔐 Secure Payments</h3>
          <p style={{ fontSize: '1rem' }}>
            All transactions are encrypted with 256-bit SSL security to keep your financial data
            safe.
          </p>
        </div>

        <div style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ color: '#005eff', marginBottom: '0.5rem' }}>👤 Data Privacy</h3>
          <p style={{ fontSize: '1rem' }}>
            We never share your personal data with third parties without your consent.
          </p>
        </div>

        <div style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ color: '#005eff', marginBottom: '0.5rem' }}>🛡️ Account Protection</h3>
          <p style={{ fontSize: '1rem' }}>
            Enable 2-factor authentication and set strong passwords to further secure your account.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: '2rem',
          backgroundColor: '#eef6ff',
          padding: '2rem',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#005eff', marginBottom: '1rem' }}>Report a Security Concern</h2>
        <p style={{ fontSize: '1rem' }}>
          Found a bug or security loophole? Please let our team know at{' '}
          <strong>security@easystay.com</strong>
        </p>
      </div>
    </div>
  );
};

export default Security;
