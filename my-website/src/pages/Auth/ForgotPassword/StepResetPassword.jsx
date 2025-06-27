import React from "react";
import StepBox from "./StepBox";

const StepResetPassword = ({
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  onNext,
  error,
  setError,
  onBack,
}) => (
  <StepBox>
    {/* Back Arrow */}
    <button
      type="button"
      onClick={onBack}
      style={{
        position: "absolute",
        left: 16,
        top: 16,
        background: "none",
        border: "none",
        fontSize: "1.5rem",
        cursor: "pointer",
        color: "#0071e3",
      }}
      aria-label="Back"
    >
      ←
    </button>
    <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 18, textAlign: "center" }}>
      Set your new password
    </div>
    <form
      onSubmit={e => {
        e.preventDefault();
        setError("");
        onNext();
      }}
    >
      <input
        type="password"
        required
        placeholder="New Password"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "0.85rem",
          border: "1.5px solid #bdbdbd",
          borderRadius: "8px",
          fontSize: "1.05rem",
          marginBottom: "1rem",
          background: "#f7faff",
        }}
      />
      <input
        type="password"
        required
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
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
        Reset Password
      </button>
    </form>
  </StepBox>
);

export default StepResetPassword;