import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserSignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const context = params.get("context");

  const [useEmail, setUseEmail] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const handleToggle = () => setUseEmail((prev) => !prev);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", useEmail ? formData.email : formData.phone, formData.password);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.heading}>
          {context === "booking" ? "Sign In to Book" : "Welcome Back!"}
        </h2>

        <form onSubmit={handleSubmit}>
          {useEmail ? (
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="you@example.com"
                required
              />
            </div>
          ) : (
            <div style={styles.inputGroup}>
              <label htmlFor="phone" style={styles.label}>Phone</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
                placeholder="+91 9876543210"
                required
              />
            </div>
          )}

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              placeholder="••••••••"
              required
            />
          </div>

          <div style={styles.forgotWrapper}>
            <a href="/forgot-password" style={styles.link}>Forgot password?</a>
          </div>

          <button type="submit" style={styles.button}>Sign In</button>
        </form>

        <div style={styles.toggleWrapper}>
          <p style={styles.toggleText}>
            {useEmail ? "Use phone instead?" : "Use email instead?"}{" "}
            <span onClick={handleToggle} style={styles.toggleLink}>
              {useEmail ? "Sign in with phone" : "Sign in with email"}
            </span>
          </p>
        </div>

        <div style={styles.signupText}>
          Don’t have an account?{" "}
          <span
            style={styles.link}
            onClick={() => navigate("/signup")}
          >
            Click here to Sign Up
          </span>
        </div>

        <div style={styles.extraOptions}>
          <p style={styles.extraLine}>New to Resto.com?</p>
          <p style={styles.extraLine}>
            Sign in to manage bookings, save your favorite properties, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#f9fafb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  container: {
    maxWidth: 420,
    width: "100%",
    padding: "2.5rem 2rem",
    background: "#ffffff",
    borderRadius: 12,
    boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    fontSize: "1.8rem",
    color: "#1d1d1f",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },
  label: {
    fontWeight: 600,
    color: "#333",
    marginBottom: "0.3rem",
    fontSize: "0.95rem",
  },
  input: {
    padding: "0.7rem 1rem",
    border: "1px solid #ccc",
    borderRadius: 6,
    fontSize: "1rem",
    outline: "none",
    transition: "border 0.2s ease",
  },
  forgotWrapper: {
    textAlign: "right",
    marginTop: "-0.5rem",
    marginBottom: "1rem",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    background: "#0071e3",
    color: "#fff",
    fontWeight: 600,
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "0.5rem",
  },
  link: {
    color: "#0071e3",
    cursor: "pointer",
    fontWeight: 600,
    textDecoration: "underline",
  },
  toggleWrapper: {
    textAlign: "center",
    marginTop: "1rem",
  },
  toggleText: {
    fontSize: "0.9rem",
    color: "#555",
  },
  toggleLink: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "#1d1d1f",
    cursor: "pointer",
  },
  signupText: {
    textAlign: "center",
    marginTop: "1.2rem",
    fontSize: "0.95rem",
  },
  extraOptions: {
    marginTop: "1.5rem",
    textAlign: "center",
  },
  extraLine: {
    fontSize: "0.85rem",
    color: "#555",
    margin: "0.2rem 0",
  },
};

export default UserSignIn;
