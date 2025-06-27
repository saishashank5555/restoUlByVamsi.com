import React from 'react';

const AboutUs = () => {
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#fff',
      color: '#333',
    },
    hero: {
      textAlign: 'center',
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #0071c2, #00bcd4)',
      color: '#fff',
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 700,
      marginBottom: '10px',
    },
    heroSubtitle: {
      fontSize: '1.4rem',
      fontWeight: 300,
    },
    section: {
      padding: '40px 20px',
      maxWidth: '960px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '2rem',
      marginBottom: '16px',
      color: '#222',
    },
    paragraph: {
      fontSize: '1.1rem',
      color: '#555',
      lineHeight: '1.8',
    },
    list: {
      listStyleType: 'none',
      paddingLeft: 0,
      fontSize: '1.1rem',
      color: '#444',
    },
    listItem: {
      marginBottom: '10px',
    },
    stats: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      marginTop: '40px',
    },
    statBox: {
      backgroundColor: '#f5f9ff',
      padding: '20px 30px',
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
      fontWeight: 600,
      fontSize: '1rem',
      textAlign: 'center',
      minWidth: '180px',
      color: '#0071c2',
    },
    ctaSection: {
      textAlign: 'center',
      margin: '40px 0',
    },
    ctaButton: {
      display: 'inline-block',
      backgroundColor: '#ff385c',
      color: '#fff',
      padding: '12px 20px',
      borderRadius: '10px',
      fontWeight: 'bold',
      textDecoration: 'none',
      margin: '0 12px',
      transition: 'all 0.3s ease',
    },
    ctaButtonHover: {
      backgroundColor: '#e03150',
    },
  };

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to EasyStay</h1>
        <p style={styles.heroSubtitle}>
          Your trusted partner for booking stays across India
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.paragraph}>
          At EasyStay, our mission is to make travel and accommodation simple, affordable, and accessible to everyone. Whether you’re planning a vacation or a business trip, we’re here to make your stay seamless and stress-free.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What We Offer</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>🏨 Verified hotel listings across India</li>
          <li style={styles.listItem}>🔐 Secure bookings with flexible cancellations</li>
          <li style={styles.listItem}>📞 24/7 customer support ready to help</li>
          <li style={styles.listItem}>📱 Seamless mobile experience through our app</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose Us</h2>
        <p style={styles.paragraph}>
          Thousands of happy customers, easy-to-use platform, and a commitment to hospitality excellence — that’s what sets EasyStay apart. With properties in 100+ cities and thousands of verified listings, we’re your travel partner for every journey.
        </p>
      </section>

      <section style={styles.stats}>
        <div style={styles.statBox}>✅ Trusted by 1M+ Users</div>
        <div style={styles.statBox}>📍 100+ Cities Served</div>
        <div style={styles.statBox}>💼 5,000+ Property Partners</div>
      </section>

      <section style={styles.ctaSection}>
        <a style={styles.ctaButton} href="/contact">📩 Contact Us</a>
        <a style={styles.ctaButton} href="/careers">🚀 Join Our Team</a>
      </section>
    </div>
  );
};

export default AboutUs;
