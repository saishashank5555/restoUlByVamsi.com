import React from "react";
import StepBox from "./StepBox";

const StepEnterEmail = ({ email, setEmail, onNext, error, setError, onBack }) => (
  <StepBox>
    {/* Back Button */}
    {onBack && (
      <button
        onClick={onBack}
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          padding: "0.4rem 0.9rem",
          fontSize: "0.95rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: "#f2f2f2",
          cursor: "pointer",
        }}
      >
        Back
      </button>
    )}

    <div style={{ marginBottom: 24 }}>
      <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 8 }}>
        Enter your registered email
      </div>
      <div style={{ color: "#666", fontSize: "0.98rem", marginBottom: 18 }}>
        We'll send a 6-digit OTP to your email to verify your identity.
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!email) return setError("Please enter your email.");
          setError("");
          onNext();
        }}
      >
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "0.85rem",
            border: "1.5px solid #bdbdbd",
            borderRadius: "8px",
            fontSize: "1.05rem",
            marginBottom: "1.2rem",
            background: "#f7faff",
          }}
        />
        {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.85rem",
            background: "linear-gradient(90deg, #0071e3, #00c6ff)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "1.08rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          Send OTP
        </button>
      </form>
    </div>
  </StepBox>
);

export default StepEnterEmail;
