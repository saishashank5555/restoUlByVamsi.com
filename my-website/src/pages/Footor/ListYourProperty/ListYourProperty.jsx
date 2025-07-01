import React from "react";
import { useNavigate } from "react-router-dom";

const ListYourProperty = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* HERO SECTION */}
        <section style={styles.hero}>
          <h1 style={styles.title}>Earn More by Listing Your Property</h1>
          <p style={styles.subtitle}>
            Join thousands of property owners increasing their revenue by listing on our trusted platform.
          </p>
          <div style={styles.buttonGroup}>
            <button style={styles.btnPrimary} onClick={() => navigate("/list-your-property/signin")}>
              Sign In
            </button>
            <button
              style={styles.btnOutline}
              onClick={() => navigate("/list-your-property")}
            >
              Sign Up
            </button>
          </div>
        </section>

        {/* WHY LIST SECTION */}
        <section style={styles.whyList}>
          <h2 style={styles.whyTitle}>Why List with Us?</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Massive Reach</h3>
              <p style={styles.featureText}>
                Get your property seen by millions of potential customers every month.
              </p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Easy Management</h3>
              <p style={styles.featureText}>
                Control availability, pricing, and more from your personalized dashboard.
              </p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>24/7 Support</h3>
              <p style={styles.featureText}>
                Our team is always available to help you succeed with your property.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    background: "linear-gradient(to bottom, #f0f4ff, #ffffff)",
    minHeight: "100vh",
    padding: "2rem 1rem",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    maxWidth: "1100px",
  },
  hero: {
    textAlign: "center",
    padding: "2rem 1rem",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto 2rem",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "300px",
    margin: "0 auto",
  },
  btnPrimary: {
    padding: "0.9rem 1.5rem",
    fontSize: "1rem",
    background: "#4A00E0",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
  btnOutline: {
    padding: "0.9rem 1.5rem",
    fontSize: "1rem",
    background: "#fff",
    color: "#4A00E0",
    border: "2px solid #4A00E0",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
  whyList: {
    textAlign: "center",
    padding: "2rem 1rem",
    background: "#f9f9f9",
    borderRadius: "1rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  whyTitle: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#222",
    marginBottom: "2rem",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
  },
  featureCard: {
    background: "#fff",
    borderRadius: "0.75rem",
    padding: "1.5rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    textAlign: "left",
  },
  featureTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#333",
  },
  featureText: {
    fontSize: "0.95rem",
    color: "#666",
    lineHeight: "1.5",
  },
};

export default ListYourProperty;
