import React from 'react';

const Press = () => {
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
        EasyStay in the News
      </h1>

      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        We're making headlines! Read what top media outlets have to say about EasyStay and how we
        are revolutionizing travel and hospitality across India.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ color: '#005eff' }}>📰 Times of India</h3>
          <p style={{ fontSize: '1rem' }}>
            "EasyStay disrupts budget travel with seamless booking tech for small-town India."
          </p>
          <a href="#" style={{ color: '#005eff', fontSize: '0.95rem' }}>Read more →</a>
        </div>

        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ color: '#005eff' }}>🗞️ The Economic Times</h3>
          <p style={{ fontSize: '1rem' }}>
            "Startup spotlight: EasyStay connects local hospitality with global travelers."
          </p>
          <a href="#" style={{ color: '#005eff', fontSize: '0.95rem' }}>Read more →</a>
        </div>

        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ color: '#005eff' }}>📺 NDTV</h3>
          <p style={{ fontSize: '1rem' }}>
            "EasyStay sets a new benchmark in affordable and secure online accommodation booking."
          </p>
          <a href="#" style={{ color: '#005eff', fontSize: '0.95rem' }}>Read more →</a>
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
        <h2 style={{ color: '#005eff', marginBottom: '1rem' }}>Media Contact</h2>
        <p style={{ fontSize: '1rem' }}>
          For interviews, quotes, or collaborations, reach out to our PR team at
          <br />
          <strong>press@easystay.com</strong>
        </p>
      </div>
    </div>
  );
};

export default Press;
