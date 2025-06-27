import React from 'react';

const ContactUs = () => {
  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
    }}>
      <h1 style={{ fontSize: '2.4rem', color: '#005eff', marginBottom: '1.5rem' }}>Contact Us</h1>

      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Have questions, feedback, or need support? Reach out to us — we're happy to help!
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Contact Info */}
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>📧 Email</h3>
          <p style={{ marginBottom: '1rem' }}><strong>support@easystay.com</strong></p>

          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>📞 Phone</h3>
          <p style={{ marginBottom: '1rem' }}><strong>+91 98765 43210</strong> (Mon–Sat, 9AM–6PM)</p>

          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>🏢 Address</h3>
          <p>
            EasyStay HQ<br />
            4th Floor, Omega Tower<br />
            Bengaluru, Karnataka - 560001
          </p>
        </div>

        {/* Contact Form */}
        <div style={{ flex: '1 1 400px', border: '1px solid #ddd', padding: '1.5rem', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>📨 Send us a message</h3>
          <form>
            <div style={{ marginBottom: '1rem' }}>
              <label>Name</label><br />
              <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.6rem', marginTop: '0.3rem', border: '1px solid #ccc', borderRadius: '6px' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Email</label><br />
              <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '0.6rem', marginTop: '0.3rem', border: '1px solid #ccc', borderRadius: '6px' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Message</label><br />
              <textarea rows="4" placeholder="Type your message here..." style={{ width: '100%', padding: '0.6rem', marginTop: '0.3rem', border: '1px solid #ccc', borderRadius: '6px' }} />
            </div>
            <button type="submit" style={{
              backgroundColor: '#005eff',
              color: '#fff',
              padding: '0.7rem 1.5rem',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
