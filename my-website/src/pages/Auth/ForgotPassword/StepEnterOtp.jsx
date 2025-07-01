import React, { useEffect, useState } from "react";
import StepBox from "./StepBox";

const StepEnterOTP = ({ email, otp, setOtp, onVerify, onResend, onBack, error }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const resendDisabled = timer > 0;

  const backgroundOpacity = 1 - timer / 30;

  return (
    <StepBox>
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

      <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 6 }}>
        Verify OTP
      </div>
      <div style={{ fontSize: "0.96rem", color: "#444", marginBottom: 12 }}>
        OTP sent to: <strong>{email}</strong>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (otp.length !== 6) return;
          onVerify();
        }}
      >
        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={e => setOtp(e.target.value)}
          style={{
            width: "100%",
            padding: "0.85rem",
            border: "1.5px solid #bdbdbd",
            borderRadius: "8px",
            fontSize: "1.1rem",
            marginBottom: "1rem",
            letterSpacing: "0.2em",
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
            marginBottom: "1rem",
          }}
        >
          Verify
        </button>
      </form>

      <button
        onClick={onResend}
        disabled={resendDisabled}
        style={{
          width: "100%",
          padding: "0.65rem",
          background: `rgba(0, 113, 227, ${backgroundOpacity})`,
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "0.95rem",
          fontWeight: 500,
          cursor: resendDisabled ? "not-allowed" : "pointer",
          transition: "background 0.3s ease",
        }}
      >
        {resendDisabled ? `Resend in ${timer}s` : "Resend OTP"}
      </button>
    </StepBox>
  );
};

export default StepEnterOTP;
