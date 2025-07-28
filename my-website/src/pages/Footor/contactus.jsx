import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

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
          <p style={{ marginBottom: '1rem' }}><strong>hyper.bookingservice@gmail.com</strong></p>

          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>📞 Phone</h3>
          <p style={{ marginBottom: '1rem' }}><strong>+91 987654321</strong> (Mon–Sat, 9AM–6PM)</p>

          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>🏢 Address</h3>
          <p>
            Hypergrid Technology Solutions Pvt. Ltd.
            Software company<br />
            Level 2, Lotus heights, Plot No 264, Kavuri Hills Rd, RBI Colony, Phase 2, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081
          </p>
        </div>

        {/* Contact Form */}
        <div style={{ flex: '1 1 400px', border: '1px solid #ddd', padding: '1.5rem', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>📨 Send us a message</h3>
          {submitted ? (
            <div style={{ color: '#005eff', fontSize: '1.15rem', padding: '1rem 0' }}>
              <strong>Thank you for contacting us!</strong><br />
              Our team will review your message and get back to you soon.<br />
              
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

              <div style={{ marginBottom: '1rem' }}>
                <label>Name</label><br />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.6rem', marginTop: '0.3rem', border: '1px solid #ccc', borderRadius: '6px' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label>Email</label><br />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.6rem', marginTop: '0.3rem', border: '1px solid #ccc', borderRadius: '6px' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label>Message</label><br />
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.6rem', marginTop: '0.3rem', border: '1px solid #ccc', borderRadius: '6px' }}
                />
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
