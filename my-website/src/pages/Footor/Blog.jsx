import React from 'react';

const Blog = () => {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#005eff', marginBottom: '1.5rem' }}>EasyStay Travel Blog</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <h3>🏔️ 10 Hill Stations to Visit This Summer</h3>
          <p>Explore cool retreats in India perfect for beating the heat.</p>
          <a href="#" style={{ color: '#005eff' }}>Read more →</a>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <h3>🍛 Foodie Travel: India’s Best Bites</h3>
          <p>A guide to must-try local dishes from every state.</p>
          <a href="#" style={{ color: '#005eff' }}>Read more →</a>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <h3>💼 Work from Anywhere: Top Remote Hotels</h3>
          <p>Find hotels with Wi-Fi, workspaces, and peaceful surroundings.</p>
          <a href="#" style={{ color: '#005eff' }}>Read more →</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
