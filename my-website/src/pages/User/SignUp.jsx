import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    subscribe: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (form.password !== form.confirmPassword) {
  //     alert("Passwords do not match!");
  //     return;
  //   }

  //   // Simulate registration
  //   console.log("Registration Data:", form);
  //   navigate("/signup-success");
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const payload = {
    fullName: form.fullName,
    email: form.email,
    phone: form.phone,
    password: form.password,
  };

  try {
    const response = await fetch("http://localhost:8081/users/registerUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let errorMsg = "Failed to register";
      try {
        const errorData = await response.json();
        errorMsg = errorData.message || errorMsg;
      } catch {}
      throw new Error(errorMsg);
    }

    const data = await response.json();

    // Store user data in sessionStorage
    sessionStorage.setItem("user", JSON.stringify(data));

    // Navigate to success page
    navigate("/signup-success");
  } catch (error) {
    alert(`Registration failed: ${error.message}`);
    console.error("Registration error:", error);
  }
};


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Your Account</h2>
      <p style={styles.subheading}>
        Register to book exclusive stays, guest houses, and banquet halls at the best rates – all from one place.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.checkboxGroup}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="subscribe"
              checked={form.subscribe}
              onChange={handleChange}
              style={{ marginRight: 8 }}
            />
            Subscribe to email offers & travel updates
          </label>
        </div>

        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>

      <p style={styles.signinText}>
        Already have an account?{" "}
        <span style={styles.link} onClick={() => navigate("/signin")}>
          Click here to Sign In
        </span>
      </p>

      <div style={styles.terms}>
        By signing up, you agree to our{" "}
        <span style={styles.link} onClick={() => navigate("/terms-of-service")}>Terms & Conditions</span>,{" "}
        <span style={styles.link} onClick={() => navigate("/privacy-policy")}>Privacy Policy</span>, and{" "}
        <span style={styles.link} onClick={() => navigate("/cancellation-policy")}>Cancellation Policy</span>.
      </div>
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
  },
  heading: {
    fontSize: "1.8rem",
    color: "#0071e3",
    fontWeight: 700,
    marginBottom: "0.5rem",
    textAlign: "center",
  },
  subheading: {
    fontSize: "1rem",
    color: "#555",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  label: {
    fontWeight: 600,
    fontSize: "0.95rem",
    color: "#333",
  },
  input: {
    padding: "0.65rem 1rem",
    border: "1.5px solid #ccc",
    borderRadius: 6,
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.2s",
  },
  checkboxGroup: {
    marginTop: "0.5rem",
  },
  checkboxLabel: {
    fontSize: "0.95rem",
    color: "#444",
  },
  button: {
    padding: "0.75rem 1rem",
    borderRadius: 6,
    fontSize: "1rem",
    fontWeight: 600,
    backgroundColor: "#0071e3",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginTop: "1rem",
    transition: "background 0.3s ease",
  },
  signinText: {
    textAlign: "center",
    marginTop: "1.2rem",
    fontSize: "0.95rem",
    color: "#333",
  },
  link: {
    color: "#0071e3",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "underline",
  },
  terms: {
    fontSize: "0.85rem",
    color: "#777",
    marginTop: "1.5rem",
    textAlign: "center",
    lineHeight: 1.6,
  },
};

export default SignUp;
