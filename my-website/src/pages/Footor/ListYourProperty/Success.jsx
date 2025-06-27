import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
          alt="Success"
          style={styles.image}
        />
        <h2 style={styles.heading}>Registration Successful!</h2>
        <p style={styles.text}>
          Thank you for registering your property with EasyStay.<br />
          Our team will review your details and get in touch with you soon.<br />
          You can now Sign in to manage your property.
        </p>
        <button
          style={styles.button}
          onClick={() => navigate("/list-your-property/signin")}
        >
          Click here to Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(120deg, #e0e7ff 0%, #f0f9ff 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  },
  card: {
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
    padding: "2.5rem 2rem",
    maxWidth: 400,
    width: "100%",
    textAlign: "center",
  },
  image: {
    width: 80,
    marginBottom: 20,
  },
  heading: {
    fontSize: "1.7rem",
    color: "#007bff",
    marginBottom: 12,
    fontWeight: 700,
  },
  text: {
    fontSize: "1.1rem",
    color: "#444",
    marginBottom: 24,
    lineHeight: 1.6,
  },
  button: {
    padding: "12px 28px",
    background: "linear-gradient(90deg, #0071e3, #00c6ff)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default Success;