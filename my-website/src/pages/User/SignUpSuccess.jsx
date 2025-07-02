import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpSuccess = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎉 You're all set!</h2>
      <p style={styles.message}>
        Your account has been created. You can now start booking hotels, guest houses, and much more.
      </p>

      <button style={styles.button} onClick={() => navigate("/signin")}>
        Go to Sign In
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 420,
    margin: "4rem auto",
    padding: "2.5rem 2rem",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    fontFamily: "Segoe UI, sans-serif",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.8rem",
    color: "#0071e3",
    fontWeight: 700,
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1rem",
    color: "#444",
    lineHeight: 1.6,
    marginBottom: "2rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: 600,
    backgroundColor: "#0071e3",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default SignUpSuccess;
