import React from 'react';

const Careers = () => {
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
        Careers at EasyStay
      </h1>

      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        At EasyStay, we believe in building a team of passionate individuals who strive to redefine
        the travel and hospitality experience in India. Join us on our mission to create
        unforgettable stays for millions of users.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        <div style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '12px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ color: '#005eff', marginBottom: '0.5rem' }}>🌍 Open Culture</h3>
          <p style={{ fontSize: '1rem' }}>
            Work in a dynamic and collaborative environment where innovation is encouraged.
          </p>
        </div>

        <div style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '12px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ color: '#005eff', marginBottom: '0.5rem' }}>🚀 Growth Opportunities</h3>
          <p style={{ fontSize: '1rem' }}>
            We offer fast-track career growth and a chance to make a real impact.
          </p>
        </div>

        <div style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '12px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ color: '#005eff', marginBottom: '0.5rem' }}>💼 Open Positions</h3>
          <ul style={{ paddingLeft: '1rem', fontSize: '1rem' }}>
            <li>Frontend Developer</li>
            <li>Backend Engineer</li>
            <li>Product Manager</li>
            <li>Customer Experience Lead</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          marginTop: '2rem',
          textAlign: 'center',
          padding: '1.5rem',
          backgroundColor: '#eef6ff',
          borderRadius: '10px',
        }}
      >
        <h2 style={{ color: '#005eff', marginBottom: '1rem' }}>Want to work with us?</h2>
        <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
          Send your resume to <strong>careers@easystay.com</strong> or apply through our job portal.
        </p>
        <button
          style={{
            backgroundColor: '#005eff',
            color: 'white',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Explore Job Openings
        </button>
      </div>
    </div>
  );
};

export default Careers;
