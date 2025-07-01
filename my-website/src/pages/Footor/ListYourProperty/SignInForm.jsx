import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const [useEmail, setUseEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleToggle = () => setUseEmail((prev) => !prev);
  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (useEmail && !formData.email.trim()) newErrors.email = "Email is required";
    if (!useEmail && !formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Mock login logic
    // On successful login, navigate to owner dashboard
    navigate("/owner/dashboard");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.cardWrapper}>
        {/* Left Form */}
        <div style={styles.leftCard}>
          <h2 style={styles.heading}>Sign In to Continue</h2>

          <form onSubmit={handleSubmit} noValidate>
            {useEmail ? (
              <div style={styles.inputGroup}>
                <label htmlFor="email" style={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  style={{ ...styles.input, borderColor: errors.email ? "red" : "#ccc" }}
                />
                {errors.email && <small style={styles.error}>{errors.email}</small>}
              </div>
            ) : (
              <div style={styles.inputGroup}>
                <label htmlFor="phone" style={styles.label}>Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  style={{ ...styles.input, borderColor: errors.phone ? "red" : "#ccc" }}
                />
                {errors.phone && <small style={styles.error}>{errors.phone}</small>}
              </div>
            )}

            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.label}>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  style={{
                    ...styles.input,
                    paddingRight: "2.5rem",
                    borderColor: errors.password ? "red" : "#ccc"
                  }}
                />
                <span onClick={handleShowPassword} style={styles.eyeIcon}>
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
              {errors.password && <small style={styles.error}>{errors.password}</small>}
            </div>

            <div style={styles.rightText}>
              <a href="/forgot-password" style={styles.link}>Forgot password?</a>
            </div>

            <button type="submit" style={styles.button}>Sign In</button>

            <div style={{ margin: "1.5rem 0" }}>
              <div style={styles.orContainer}>
                <div style={styles.orLine}></div>
                <span style={styles.orText}>OR</span>
                <div style={styles.orLine}></div>
              </div>
              <button type="button" style={styles.googleButton}>
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  style={{ width: "20px", marginRight: "10px" }}
                />
                Sign in with Google
              </button>
            </div>

            <div style={styles.toggleWrapper}>
              <p style={styles.toggleText}>
                {useEmail ? "Want to use phone instead?" : "Want to use email instead?"}{" "}
                <span onClick={handleToggle} style={styles.toggleLink}>
                  {useEmail ? "Use Phone" : "Use Email"}
                </span>
              </p>
            </div>

            <p style={styles.signupText}>
              Don't have an account?{" "}
              <span
                style={styles.toggleLink}
                onClick={() => navigate("/list-your-property/signup")}
              >
                Sign Up
              </span>
            </p>

            <button
              onClick={() => navigate("/")}
              type="button"
              style={{ ...styles.button, background: "#777", marginTop: "1rem" }}
            >
              Back to Homepage
            </button>
          </form>
        </div>

        {/* Right Features */}
        <div style={styles.rightCard}>
          <h3 style={{ ...styles.heading, fontSize: "1.4rem", textAlign: "left" }}>Why Sign In?</h3>
          <div style={styles.featureGrid}>
            {features.map((feature, idx) => (
              <div key={idx} style={styles.featureItem}>
                <img src={feature.icon} alt="icon" style={styles.featureIcon} />
                <p style={styles.featureText}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature content
const features = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828506.png",
    text: "Manage your property listings with ease",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
    text: "Track bookings and view analytics",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3524/3524659.png",
    text: "24/7 customer support for all users",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    text: "Access exclusive partner tools and insights",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/8832/8832119.png",
    text: "Connect with global travelers instantly",
  },
];

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(120deg, #f0f4ff, #d0e1ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  },
  cardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1000px",
    width: "100%",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
    borderRadius: "16px",
    overflow: "hidden",
    background: "#fff",
  },
  leftCard: {
    flex: "1 1 50%",
    padding: "2rem",
    borderRight: "1px solid #eee",
  },
  rightCard: {
    flex: "1 1 50%",
    padding: "2rem",
    background: "#f9fbff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontSize: "1.6rem",
    marginBottom: "1.5rem",
    fontWeight: "600",
    color: "#222",
  },
  inputGroup: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  eyeIcon: {
    position: "absolute",
    right: "0.8rem",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    fontSize: "1.2rem",
    color: "#555",
  },
  rightText: {
    textAlign: "right",
    marginBottom: "1rem",
  },
  button: {
    width: "100%",
    padding: "0.85rem",
    background: "linear-gradient(90deg, #4a00e0, #8e2de2)",
    color: "#fff",
    fontWeight: "600",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  googleButton: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  toggleWrapper: {
    marginTop: "1rem",
    textAlign: "center",
  },
  toggleText: {
    fontSize: "0.9rem",
    color: "#555",
  },
  toggleLink: {
    color: "#4a00e0",
    fontWeight: "600",
    cursor: "pointer",
    marginLeft: "4px",
  },
  signupText: {
    marginTop: "1.2rem",
    fontSize: "0.9rem",
    textAlign: "center",
    color: "#444",
  },
  error: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: "0.3rem",
  },
  link: {
    color: "#4a00e0",
    textDecoration: "none",
  },
  or: {
    fontSize: "0.9rem",
    color: "#999",
    margin: "1rem 0",
  },
  orContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1rem 0",
  },
  orLine: {
    flex: 1,
    height: "1px",
    background: "#ccc",
    margin: "0 10px",
  },
  orText: {
    fontSize: "0.9rem",
    color: "#999",
    whiteSpace: "nowrap",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.75rem",
  },
  featureIcon: {
    width: "36px",
    height: "36px",
    objectFit: "contain",
  },
  featureText: {
    fontSize: "0.95rem",
    color: "#333",
    lineHeight: "1.3",
  },
};

export default SignInForm;
